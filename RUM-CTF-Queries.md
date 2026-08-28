# RUM + Journey Monitoring — Hanoi Coffee Guardrail

RUM app ID: `95ad2a6f-23d2-4f1b-8e44-46f0570d49a4`  
Service: `hanoi-coffee-guardrail-vn`  
Dashboard: https://bang.datadoghq.com/dashboard/n4m-52n-kwr

Journey Monitoring is Preview (no create-journey API). Create or edit journeys in **[Digital Experience → Journey Monitoring](https://bang.datadoghq.com/digital-experience/journeys) → New Journey**.

In the start/end pickers, choose **View name** (not URL path). Datadog groups `/quiz/sua-da/step-1`…`step-5` as `/quiz/sua-da/?`. The browser URL is still `/quiz/sua-da/step-N`; `@view.name` is the exact string below. `/game` stays the URL even when the named view is `/game/result/sua-da`.

Do **not** use the old overlay names `/game/quiz/...`.

## Datadog UI setup

Frontend application: **Hanoi Coffee Guardrail** (`95ad2a6f-23d2-4f1b-8e44-46f0570d49a4`).

For each journey: name → start event → end event → optional variant → **Save Journey**. Edit existing journeys if they still end on `/game/quiz/...`.

| Journey | Start (picker) | End (picker) | Variant steps (optional) |
| --- | --- | --- | --- |
| Enter the cafe | View `/` | View `/game` | — |
| Win the Guardrail | View `/game` | Action `ctf_challenge_won` | Action `ctf_challenge_attempt` → View `/game/result/sua-da` |
| Guardrail held | View `/game` | Action `ctf_challenge_held` | Action `ctf_challenge_attempt` → View `/game/result/trung` |
| Brew sữa đá | Action `ctf_challenge_won` | View `/quiz/sua-da/complete` | Action `quiz_started` → View `/quiz/sua-da/opening` → `/quiz/sua-da/step-1` … `step-5` |
| Brew trứng | Action `ctf_challenge_held` | View `/quiz/trung/complete` | Action `quiz_started` → View `/quiz/trung/opening` → `/quiz/trung/step-1` … `step-5` |

Brew journeys **chain** off the guardrail journeys: brew start = previous journey end. Do not start brew at `quiz_started` or those tiles float off the map.

Do **not** add the trứng quiz as a second end on **Win the Guardrail**.

After saving, run two sessions: Egg Allergy → milk quiz, then Start Simple → egg quiz.

## Journey recipes

A win is always sữa đá. Trứng is the hold path. The map is a **Y**:

```
/  → /game → Win the Guardrail → /quiz/sua-da/complete
            → Guardrail held     → /quiz/trung/complete
```

If Journey Monitoring is not enabled, request access: https://www.datadoghq.com/product-preview/journey-monitoring/

Dashboard funnels still show conversion without a saved journey.

## Synthetics vs real winners

A **Synthetic browser test** is useful for Journey Monitoring **uptime** (each journey gets a test suite). It should not appear on the showcase winner board.

- Dashboard RUM widgets filter `@session.type:user`.
- The app does not fire `ctf_challenge_won` when it detects Datadog Synthetics (`window._DATADOG_SYNTHETICS` or `DatadogSynthetics` user agent).
- API spans from synthetics are tagged `traffic:synthetics` so LLMObs win widgets can use `-@traffic:synthetics`.

Suggested browser test (Digital Experience → Synthetics → New Test):

1. Go to `/`
2. Type a name (for example `synthetics`)
3. Click **Start your journey** / **Bắt đầu hành trình**
4. On `/game`, click **Egg Allergy** then **Attempt Challenge**
5. Click the brew CTA so the browser navigates to `/quiz/sua-da`

Leave RUM collection on if you want Journey Monitoring to see the synthetic path; winner widgets still ignore it. Attach the test to the journey's test suite for uptime.

## Custom RUM events

### Landing

- `demo_entered` — welcome page loaded
- `demo_start_journey` — name submitted (button or Enter). Also `data-dd-action-name="demo_start_journey"` on the CTA.

### Challenge

- `ctf_challenge_attempt` — every submit (`success` true/false, `verdict`)
- `ctf_challenge_won` — additional action when iced milk coffee is recommended (`valid_break`)
- Click on the challenge button uses `data-dd-action-name="attempt_challenge"` (VI/EN-safe)

### Quiz

- `quiz_cta_shown`, `quiz_started`, `quiz_step_answered`, `quiz_completed`
- Real pages: `/quiz/sua-da` and `/quiz/trung` (full navigation off `/game`)
- Views: `/quiz/{sua-da|trung}/opening` / `step-1`…`step-5` / `complete`
- After an AI answer: view `/game/result/sua-da` or `/game/result/trung`

### Winner action attributes

- `winner`, `challenge_type`, `challenge_name`, `verdict`, `user_message`, `confidence`, `reasoning`, `completion_time`, `session_id`

## Dashboard and Explorer queries

Filter every query with `@application.id:95ad2a6f-23d2-4f1b-8e44-46f0570d49a4 @session.type:user`.

### Winners

```
@type:action @action.type:custom @action.name:ctf_challenge_won @session.type:user
```

### Attempts vs wins

```
@type:action @action.type:custom @action.name:ctf_challenge_attempt
```

### Quiz conversion

```
@type:action @action.type:custom @action.name:quiz_started
@type:action @action.type:custom @action.name:quiz_completed
```

### Winners with Session Replay

```
@type:action @action.type:custom @action.name:ctf_challenge_won @session.has_replay:true
```

### User attributes after a win

- `@usr.name`
- `@user.ctf_winner:true`
- `@user.ctf_status:winner`

## LLM Observability

```
@ml_app:hanoi-coffee-guardrail-vn @name:process_ctf_request
@ml_app:hanoi-coffee-guardrail-vn @name:process_ctf_request ctf.challenge_status:completed
@ml_app:hanoi-coffee-guardrail-vn @name:process_ctf_request ctf.challenge_status:failed
```
