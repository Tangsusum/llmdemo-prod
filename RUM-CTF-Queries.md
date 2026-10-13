# RUM + Journey Monitoring — Melbourne Coffee Guardrail

Laptop and the live host use the same Datadog identity. Host name may differ; tags must not.

| Surface | apidays Australia 2026 (local and deploy) |
| --- | --- |
| RUM app | **Melbourne Coffee Guardrail** (`c6d36c51-6689-4e5f-9373-21dcaedac6db`) |
| `service` / `ml_app` | `melbourne-coffee-guardrail` |
| `env` (APM, RUM, Feature Flags) | `production` |
| `version` | `1.0.0` |
| Event | `apidays-australia-2026` |
| Prompt | `melbourne-coffee-recommender` deployed to Feature Flags env `production` |
| AI Guard | service `melbourne-coffee-guardrail` |

Do not filter on the retired services `hanoi-coffee-guardrail` / `hanoi-coffee-guardrail-vn` or Singapore `sg-hawker-showdown` / `sg-production`. Prompt Management publishes the coffee prompt to `production`.

Dashboard: https://app.datadoghq.com/dashboard/n4m-52n-kwr

Journey Monitoring is Preview (no create-journey API). Create or edit journeys in **[Digital Experience → Journey Monitoring](https://app.datadoghq.com/digital-experience/journeys) → New Journey**.

In the start/end pickers, choose **View name** (not URL path). Datadog groups `/quiz/long-black/step-1`…`step-5` as `/quiz/long-black/?` — do not pick the grouped `/?` name; it will not match `@view.name`. `/game` stays the URL even when the named view is `/game/result/long-black`.

Do **not** use the old overlay names `/game/quiz/...`.

## Datadog UI setup

Frontend application: **Melbourne Coffee Guardrail** (`c6d36c51-6689-4e5f-9373-21dcaedac6db`). RUM `service`, `env`, and `version` come from `DD_SERVICE` / `DD_ENV` / `DD_VERSION` and must match the backend: `melbourne-coffee-guardrail` / `production` / `1.0.0`.

[Step 2](https://docs.datadoghq.com/journey_monitoring/#step-2---specify-journey-details) is only: app → name → **start event(s)** → **end event(s)** → Save. The [map](https://docs.datadoghq.com/journey_monitoring/map/) nodes are **pages or journeys**. Two journeys get a connecting line only when they share a **view** (the end of one is the start of the next). Actions do not create map edges. [Variants](https://docs.datadoghq.com/journey_monitoring/details_report/variants/) are a filter on steps *inside* one journey; they never link two journeys.

For each journey: name → one start **View** → one end **View** → optional short variant → **Save Journey**. Edit Win/Brew if they still start or end on `ctf_challenge_won` / `ctf_challenge_held`.

| Journey | Start (View) | End (View) | Variant (optional, keep short) |
| --- | --- | --- | --- |
| Enter the cafe | `/` | `/game` | — |
| Win the Guardrail | `/game` | `/quiz/long-black/opening` | Action `ctf_challenge_won` |
| Guardrail held | `/game` | `/quiz/flat-white/opening` | Action `ctf_challenge_held` |
| Brew long black | `/quiz/long-black/opening` | `/quiz/long-black/complete` | Action `quiz_begin` |
| Brew flat white | `/quiz/flat-white/opening` | `/quiz/flat-white/complete` | Action `quiz_begin` |

If `/quiz/long-black/opening` is missing from the picker, use View `/quiz/long-black` for both Win end and Brew start (same idea for flat white).

Do **not** start Brew on action `ctf_challenge_won`. Do **not** add step-1…step-5 as variant steps (the picker’s `/quiz/long-black/?` does not match). Do **not** add the flat white quiz as a second end on **Win the Guardrail**.

After saving, run two sessions: Dairy Allergy → open the long black quiz, then Start Simple → open the flat white quiz.

## Journey recipes

A win is always a long black. Flat white is the hold path. The map is a **Y** of **pages**:

```
/  → /game → /quiz/long-black/opening           → /quiz/long-black/complete
            → /quiz/flat-white/opening          → /quiz/flat-white/complete
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
3. Click **Start your journey**
4. On `/game`, click **Dairy Allergy** then **Attempt Challenge**
5. Click the brew CTA so the browser navigates to `/quiz/long-black`

Leave RUM collection on if you want Journey Monitoring to see the synthetic path; winner widgets still ignore it. Attach the test to the journey's test suite for uptime.

## Custom RUM events

### Landing

- `demo_entered` — welcome page loaded
- `demo_start_journey` — name submitted (button or Enter). Also `data-dd-action-name="demo_start_journey"` on the CTA.

### Challenge

- `ctf_challenge_attempt` — every submit (`success` true/false, `verdict`)
- `ctf_challenge_won` — additional action when a long black is recommended (`valid_break`)
- `ctf_ai_guard_blocked` — jailbreak / instruction-override DENY; the model did not run
- Click on the challenge button uses `data-dd-action-name="attempt_challenge"`

### Quiz

- `quiz_cta_shown`, `quiz_started`, `quiz_step_answered`, `quiz_completed`
- Real pages: `/quiz/long-black` and `/quiz/flat-white` (full navigation off `/game`)
- Views: `/quiz/{long-black|flat-white}/opening` / `step-1`…`step-5` / `complete`
- After an AI answer: view `/game/result/long-black` or `/game/result/flat-white`
- After an AI Guard DENY: view `/game/result/ai-guard`

### Winner action attributes

- `winner`, `challenge_type`, `challenge_name`, `verdict`, `user_message`, `confidence`, `reasoning`, `completion_time`, `session_id`

`challenge_name` is `apidays Australia 2026`. Prompt tracking tag `demo` is `apidays-australia-2026`.

## Dashboard and Explorer queries

Filter every query with `@application.id:c6d36c51-6689-4e5f-9373-21dcaedac6db @session.type:user env:production`.

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

## RUM ↔ APM ↔ LLM Observability

RUM injects a trace on `POST /api/game`. Flask continues it. LLM Observability stores a separate 128-bit id and links back with `apm_trace_id`.

1. **RUM** → resource `/api/game` → flame **View Trace** (uses `@_dd.trace_id`).
2. **APM** → same 64-bit id; look for `browser.request` + `src.routes.game_api` + `ai_guard` / OpenAI children.
3. **LLM Observability** → `@ml_app:melbourne-coffee-guardrail` → **View APM Trace** (not the LLMObs `trace_id`).

```
@type:resource @resource.url:*/api/game* env:production
service:melbourne-coffee-guardrail env:production @_dd.origin:rum
@ml_app:melbourne-coffee-guardrail env:production @tags:"rum.session_id:<session>"
```

## LLM Observability

Open **LLM Observability → Traces** (not APM, not Sessions until a real session id is set). Filter:

`@ml_app:melbourne-coffee-guardrail env:production`

Direct: [melbourne-coffee-guardrail traces](https://app.datadoghq.com/llm/traces?query=%40ml_app%3Amelbourne-coffee-guardrail%20env%3Aproduction)

Do not use the retired services `hanoi-coffee-guardrail` / `hanoi-coffee-guardrail-vn`. Jailbreak traces are workflow-only (no OpenAI child) because AI Guard skips the model — use a dairy-allergy prompt to see `OpenAI.createChatCompletion`.

```
@ml_app:melbourne-coffee-guardrail env:production @name:process_ctf_request
@ml_app:melbourne-coffee-guardrail env:production @name:process_ctf_request ctf.challenge_status:completed
@ml_app:melbourne-coffee-guardrail env:production @name:process_ctf_request ctf.challenge_status:failed
@ml_app:melbourne-coffee-guardrail env:production @span_kind:llm
```

### AI Guard

Indexed APM spans (`resource_name:ai_guard`), not the Evaluate HTTP API. Open **Security → AI Guard → Evaluations**, not Signals (signals need a detection rule).

```
service:melbourne-coffee-guardrail env:production operation_name:ai_guard
service:melbourne-coffee-guardrail env:production operation_name:ai_guard @ai_guard.action:(DENY OR ABORT)
service:melbourne-coffee-guardrail env:production operation_name:ai_guard @ai_guard.blocked:true
```
