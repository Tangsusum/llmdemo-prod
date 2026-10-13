(function (global) {
  "use strict";

  var IMG = "/static/quiz_img/";

  var CHROME = {
    tryAnother: "TRY ANOTHER",
    guessAgain: "GUESS AGAIN",
    bloom: "…steaming…",
    close: "Return to game",
    returnToGame: "Return to game",
    notQuite: "NOT QUITE!",
    tryAnotherBody: "Try another.",
    quizLabel: "Coffee quiz"
  };

  var QUIZZES = {
    "long-black": {
      id: "long-black",
      rumKey: "long-black",
      completeImage: IMG + "longblack.png",
      opening: {
        kicker: "Melbourne long black",
        title: "MAKE A LONG BLACK",
        subcopy: "Hot water first.\nEspresso on top.\nKeep that crema.",
        image: IMG + "longblack.png",
        cta: "LET’S BREW"
      },
      result: {
        kicker: "Served",
        title: "BEAUTIFUL.",
        subtitle: "LONG BLACK: COMPLETE",
        body: "Water in the cup, espresso over the top, crema still sitting pretty.",
        brewLine: "Your cup:",
        stars: "★★★★★",
        stats: [
          { label: "Strength", fill: 100 },
          { label: "Crema", fill: 90 },
          { label: "No milk", fill: 100 }
        ]
      },
      steps: [
        {
          id: 1,
          view: "step-1",
          kicker: "Step 1 — Start with the cup",
          title: "WHAT GOES IN THE CUP FIRST?",
          image: IMG + "hotwater.png",
          layout: "cards",
          choices: [
            { id: "milk", emoji: "🥛", label: "Steamed milk", correct: false, wrongTitle: "WRONG ORDER!" },
            { id: "hot-water", emoji: "💧", label: "Hot water", correct: true },
            { id: "ice", emoji: "🧊", label: "A glass of ice", correct: false, wrongTitle: "NOT A LONG BLACK!" },
            { id: "espresso-first", emoji: "☕", label: "The espresso shot", correct: false, wrongTitle: "NOT YET!" }
          ],
          correct: {
            title: "WATER FIRST.",
            body: "A long black starts with hot water in the cup.\n\nThe espresso lands on top later — that is how the crema stays intact.",
            cta: "NEXT: THE SHOT →"
          },
          wrongBody: "Hot water goes in first. Milk, ice, or espresso-first will not give you a long black."
        },
        {
          id: 2,
          view: "step-2",
          kicker: "Step 2 — Pull the shot",
          title: "HOW MUCH ESPRESSO?",
          image: IMG + "espresso.png",
          layout: "cards",
          choices: [
            { id: "single", emoji: "1️⃣", label: "A single espresso", correct: false },
            { id: "double", emoji: "☕", label: "A double espresso shot", correct: true },
            { id: "instant", emoji: "📦", label: "Instant coffee granules", correct: false },
            { id: "drip", emoji: "🫖", label: "A pot of filter coffee", correct: false }
          ],
          correct: {
            title: "DOUBLE IT.",
            body: "A Melbourne long black is built on a double espresso shot.\n\nThat extra shot is what sits on the water and keeps the crema.",
            cta: "NEXT: THE POUR →"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "This cup wants a double espresso shot — not a single, not instant, not a whole pot."
        },
        {
          id: 3,
          view: "step-3",
          kicker: "Step 3 — Protect the crema",
          title: "WHERE DOES THE ESPRESSO GO?",
          image: IMG + "espressopour.png",
          layout: "cards",
          extra: "bloom",
          choices: [
            { id: "stir-in", emoji: "🥄", label: "Stirred into the water", correct: false },
            { id: "on-top", emoji: "⬇️", label: "Poured on top of the water", correct: true },
            { id: "under", emoji: "🥛", label: "Under a layer of milk", correct: false },
            { id: "side", emoji: "🫗", label: "Served in a separate glass", correct: false }
          ],
          correct: {
            title: "POUR IT OVER.",
            body: "The double shot goes on top of the hot water.\n\nThat gentle pour keeps the crema from breaking up.",
            cta: "NEXT: LEAVE IT →"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "Pour the espresso on top of the water. Stirring it in or hiding it under milk loses the crema."
        },
        {
          id: 4,
          view: "step-4",
          kicker: "Step 4 — Hands off",
          title: "THE SHOT IS IN. NOW WHAT?",
          image: IMG + "longblack.png",
          layout: "actions",
          extra: "drip",
          choices: [
            { id: "stir", emoji: "🥄", label: "STIR\nMix the crema through.", correct: false },
            { id: "milk", emoji: "🥛", label: "ADD MILK\nSoften it up.", correct: false },
            { id: "wait", emoji: "✨", label: "LEAVE IT\nLet the crema sit.", correct: true },
            { id: "ice", emoji: "🧊", label: "ADD ICE\nTurn it into an iced latte.", correct: false }
          ],
          correct: {
            title: "LEAVE THE CREMA.",
            body: "Do not stir it through. Do not add milk.\n\nThe whole point of water-first is that golden crema on top.",
            cta: "ALMOST THERE →"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "Leave it. Stirring, milk, or ice will undo the long black."
        },
        {
          id: 5,
          view: "step-5",
          kicker: "Step 5 — Serve it",
          title: "CUP’S READY. HOW DO WE FINISH?",
          image: IMG + "longblack.png",
          layout: "beats",
          beats: [
            {
              title: "KEEP THE CREMA?",
              layout: "actions",
              choices: [
                { id: "keep", emoji: "☕", label: "KEEP IT", correct: true },
                { id: "skim", emoji: "🚫", label: "SKIM IT OFF", correct: false }
              ],
              wrongTitle: "NOT QUITE!",
              wrongBody: "The crema is the finish. Leave it on the cup."
            },
            {
              title: "WHERE NEXT?",
              hint: "Tap the finished cup.",
              layout: "tap-scene",
              image: IMG + "longblack.png"
            }
          ],
          correct: {
            title: "THAT’S THE ONE.",
            body: "Hot water in the cup first, then a double espresso poured on top.\n\nNo milk. Crema still there. Classic Melbourne.",
            cta: "SERVE IT!"
          }
        }
      ]
    },
    "flat-white": {
      id: "flat-white",
      rumKey: "flat-white",
      completeImage: IMG + "flatwhite.png",
      opening: {
        kicker: "Melbourne flat white",
        title: "MAKE A FLAT WHITE",
        subcopy: "Double shot.\nSilky steamed milk.\nA proper ceramic cup.",
        image: IMG + "flatwhite.png",
        cta: "LET’S STEAM"
      },
      result: {
        kicker: "Served",
        title: "NICE ONE.",
        subtitle: "FLAT WHITE: COMPLETE",
        body: "Double espresso, steamed milk with fine microfoam, ceramic cup. Very Melbourne.",
        brewLine: "Your cup:",
        stars: "★★★★★",
        stats: [
          { label: "Coffee kick", fill: 100 },
          { label: "Microfoam", fill: 100 },
          { label: "Balance", fill: 100 }
        ]
      },
      steps: [
        {
          id: 1,
          view: "step-1",
          kicker: "Step 1 — Start strong",
          title: "WHAT’S THE COFFEE BASE?",
          image: IMG + "espresso.png",
          layout: "cards",
          choices: [
            { id: "double", emoji: "☕", label: "A double espresso shot", correct: true },
            { id: "tea", emoji: "🍵", label: "A splash of black tea", correct: false },
            { id: "drip", emoji: "🫖", label: "Long filter coffee", correct: false },
            { id: "instant", emoji: "📦", label: "Instant coffee powder", correct: false }
          ],
          correct: {
            title: "START WITH A DOUBLE.",
            body: "A flat white is built on a double espresso shot.\n\nThat concentrated coffee is what the steamed milk has to stand up to.",
            cta: "STEAM THE MILK →"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "A flat white needs a double espresso shot — not tea, filter, or instant."
        },
        {
          id: 2,
          view: "step-2",
          kicker: "Step 2 — Texture the milk",
          title: "WHAT KIND OF MILK GOES IN?",
          image: IMG + "steamedmilk.png",
          layout: "cards",
          choices: [
            { id: "cold", emoji: "🧊", label: "Cold milk straight from the fridge", correct: false },
            { id: "microfoam", emoji: "🥛", label: "Steamed milk with fine microfoam", correct: true },
            { id: "cream", emoji: "🍦", label: "Whipped cream", correct: false },
            { id: "bubbles", emoji: "🫧", label: "Big soapy bubbles", correct: false }
          ],
          correct: {
            title: "SILKY, NOT SUDSY.",
            body: "Fine microfoam is the Melbourne signature: steamed milk that looks like wet paint, not a bubble bath.\n\nThat texture sits over the espresso instead of floating as a thick cap.",
            cta: "PICK A CUP →"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "We want steamed milk with fine microfoam — not cold milk, cream, or huge bubbles."
        },
        {
          id: 3,
          view: "step-3",
          kicker: "Step 3 — The vessel",
          title: "WHAT DO WE SERVE IT IN?",
          image: IMG + "flatwhite.png",
          layout: "cards",
          choices: [
            { id: "ceramic", emoji: "☕", label: "A ceramic cup", correct: true },
            { id: "paper", emoji: "🥤", label: "A tall paper takeaway cup", correct: false },
            { id: "glass", emoji: "🥛", label: "A tall latte glass", correct: false },
            { id: "jar", emoji: "🫙", label: "A mason jar", correct: false }
          ],
          correct: {
            title: "CERAMIC. ALWAYS.",
            body: "A flat white is served in a ceramic cup.\n\nThe smaller cup keeps the ratio tight: espresso plus silky milk, not a giant milky drink.",
            cta: "CHECK THE FOAM →"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "Ceramic cup. A tall glass or takeaway tub turns this into something else."
        },
        {
          id: 4,
          view: "step-4",
          kicker: "Step 4 — Read the milk",
          title: "WHEN IS THE MICROFOAM READY?",
          image: IMG + "steamedmilk.png",
          layout: "stages",
          choices: [
            { id: "runny", emoji: "", label: "THIN\nWarm milk, no texture.", swatch: "runny", correct: false },
            { id: "creamy", emoji: "", label: "FOAMY\nA thick dry cap on top.", swatch: "creamy", correct: false },
            { id: "fluffy", emoji: "", label: "SILKY\nFine microfoam, wet paint.", swatch: "fluffy", correct: true }
          ],
          correct: {
            title: "THERE IT IS.",
            body: "Fine microfoam looks glossy and pours like wet paint.\n\nThat is what lets the milk and espresso become one drink instead of a cappuccino hat.",
            cta: "BUILD THE CUP →"
          },
          wrongTitle: "KEEP GOING!",
          wrongBody: "Not there yet — we want fine, silky microfoam, not thin milk or a dry foam cap."
        },
        {
          id: 5,
          view: "step-5",
          kicker: "Step 5 — The pour",
          title: "ESPRESSO: READY.\nMILK: READY.\nNOW WHAT?",
          image: IMG + "flatwhite.png",
          layout: "cards",
          choices: [
            { id: "pour", emoji: "🥛", label: "Pour steamed milk over the espresso", correct: true },
            { id: "ice", emoji: "🧊", label: "Pour it over ice", correct: false },
            { id: "dump", emoji: "🫗", label: "Dump the espresso and start again", correct: false },
            { id: "water", emoji: "💧", label: "Top it up with hot water", correct: false }
          ],
          correct: {
            title: "LOOK AT THAT CUP.",
            body: "Double espresso in a ceramic cup.\nSteamed milk with fine microfoam poured over the top.\n\nThat’s a Melbourne flat white.",
            cta: "SERVE IT!"
          },
          wrongTitle: "NOT QUITE!",
          wrongBody: "Pour the steamed milk over the espresso. No ice, no extra water, no starting over."
        }
      ]
    }
  };

  var state = {
    quizId: null,
    screen: "opening",
    stepIndex: 0,
    beatIndex: 0,
    startedAt: 0,
    stepStartedAt: 0,
    vitalOpen: false,
    locked: false,
    feedback: null
  };

  var root = null;
  var onCloseCallback = null;

  function tx(value) {
    return value == null ? "" : String(value);
  }

  function rum(fn) {
    try {
      if (global.DD_RUM) fn(global.DD_RUM);
    } catch (err) {
      console.warn("RUM tracking error (non-critical):", err);
    }
  }

  function quiz() {
    return QUIZZES[state.quizId];
  }

  function isPageMode() {
    return document.body.classList.contains("quiz-page");
  }

  function viewName(screen) {
    return "/quiz/" + quiz().rumKey + "/" + screen;
  }

  function syncUrl(screen) {
    if (!isPageMode() || !quiz()) return;
    var path = viewName(screen);
    if (window.location.pathname === path) return;
    var payload = { quiz: quiz().rumKey, screen: screen };
    if (!window.history.state || window.history.state.quiz !== quiz().rumKey) {
      history.replaceState(payload, "", path);
    } else {
      history.pushState(payload, "", path);
    }
  }

  function startView(screen) {
    syncUrl(screen);
    rum(function (r) {
      if (typeof r.startView === "function") {
        r.startView({ name: viewName(screen) });
      }
      if (typeof r.setViewContextProperty === "function") {
        r.setViewContextProperty("quiz", quiz().rumKey);
        r.setViewContextProperty("quiz_step", screen);
      }
    });
  }

  function restoreGameView() {
    if (isPageMode()) return;
    rum(function (r) {
      if (typeof r.startView === "function") {
        r.startView({ name: "/game" });
      }
    });
  }

  function startJourneyVital() {
    rum(function (r) {
      if (typeof r.startDurationVital === "function") {
        r.startDurationVital("quiz." + quiz().rumKey);
        state.vitalOpen = true;
      }
    });
  }

  function stopJourneyVital() {
    if (!state.vitalOpen) return;
    rum(function (r) {
      if (typeof r.stopDurationVital === "function") {
        r.stopDurationVital("quiz." + quiz().rumKey);
      }
    });
    state.vitalOpen = false;
  }

  function startStepVital(stepId) {
    rum(function (r) {
      if (typeof r.startDurationVital === "function") {
        r.startDurationVital("quiz." + quiz().rumKey + ".step-" + stepId);
      }
    });
    state.stepStartedAt = Date.now();
  }

  function stopStepVital(stepId) {
    rum(function (r) {
      if (typeof r.stopDurationVital === "function") {
        r.stopDurationVital("quiz." + quiz().rumKey + ".step-" + stepId);
      }
    });
  }

  function addAction(name, attrs) {
    rum(function (r) {
      if (typeof r.addAction === "function") r.addAction(name, attrs || {});
    });
  }

  function esc(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function nl(text) {
    return esc(text).replace(/\n/g, "<br>");
  }

  function ensureRoot() {
    if (root) return root;
    root = document.getElementById("quiz-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "quiz-root";
      document.body.appendChild(root);
    }
    return root;
  }

  function progressHtml() {
    var steps = quiz().steps;
    var dots = "";
    var i;
    var current = state.screen === "complete" ? steps.length : state.screen === "opening" ? -1 : state.stepIndex;
    for (i = 0; i < steps.length; i += 1) {
      var cls = "quiz-dot";
      if (i < current) cls += " is-done";
      if (i === current) cls += " is-current";
      dots += '<span class="' + cls + '"></span>';
    }
    return dots;
  }

  function shell(inner) {
    var closeCtl = isPageMode()
      ? '<a class="quiz-close" href="/game" data-dd-action-name="quiz_return_game" aria-label="' + esc(tx(CHROME.close)) + '">×</a>'
      : '<button type="button" class="quiz-close" data-quiz-close aria-label="' + esc(tx(CHROME.close)) + '">×</button>';
    return (
      '<div class="quiz-overlay" role="main" aria-label="' + esc(tx(CHROME.quizLabel)) + '">' +
        '<div class="quiz-shell">' +
          '<div class="quiz-topbar">' +
            '<div class="quiz-progress" aria-hidden="true">' + progressHtml() + "</div>" +
            closeCtl +
          "</div>" +
          '<div class="quiz-stage">' + inner + "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function sceneHtml(src, tappable) {
    return (
      '<div class="quiz-scene' + (tappable ? " is-tappable" : "") + '"' +
        (tappable ? ' data-tap-scene="1"' : "") + ">" +
        '<img src="' + esc(src) + '" alt="">' +
      "</div>"
    );
  }

  function cardHtml(choice) {
    var extra = "";
    if (choice.swatch) {
      extra = '<div class="quiz-stage-swatch ' + esc(choice.swatch) + '"></div>';
    } else if (choice.emoji) {
      extra = '<span class="quiz-card-emoji">' + choice.emoji + "</span>";
    }
    return (
      '<button type="button" class="quiz-card" data-choice="' + esc(choice.id) + '" data-dd-action-name="quiz_choice_' + esc(choice.id) + '">' +
        extra +
        '<span class="quiz-card-label">' + nl(tx(choice.label)) + "</span>" +
      "</button>"
    );
  }

  function cardsHtml(choices, layout) {
    var cls = "quiz-cards";
    if (layout === "actions") cls += " is-actions";
    if (layout === "stages") cls += " is-stages";
    var html = '<div class="' + cls + '">';
    var i;
    for (i = 0; i < choices.length; i += 1) html += cardHtml(choices[i]);
    return html + "</div>";
  }

  function render(opts) {
    opts = opts || {};
    var skipView = !!opts.skipView;
    var q = quiz();
    var html;
    if (!opts.keepLock) state.locked = false;
    if (state.screen === "opening") {
      if (!skipView) startView("opening");
      html = shell(
        '<p class="quiz-kicker">' + esc(tx(q.opening.kicker)) + "</p>" +
        '<h2 class="quiz-title">' + nl(tx(q.opening.title)) + "</h2>" +
        '<p class="quiz-subcopy">' + nl(tx(q.opening.subcopy)) + "</p>" +
        sceneHtml(q.opening.image, false) +
        '<button type="button" class="quiz-primary" data-quiz-begin data-dd-action-name="quiz_begin">' +
          esc(tx(q.opening.cta)) +
        "</button>"
      );
    } else if (state.screen === "complete") {
      if (!skipView) startView("complete");
      html = shell(
        '<p class="quiz-kicker">' + esc(tx(q.result.kicker)) + "</p>" +
        sceneHtml(q.completeImage, false) +
        '<h2 class="quiz-title">' + esc(tx(q.result.title)) + "</h2>" +
        '<p class="quiz-subcopy"><strong>' + esc(tx(q.result.subtitle)) + "</strong></p>" +
        '<p class="quiz-subcopy">' + nl(tx(q.result.body)) + "</p>" +
        '<p class="quiz-subcopy">' + esc(tx(q.result.brewLine)) + "</p>" +
        '<div class="quiz-stars">' + esc(q.result.stars) + "</div>" +
        statsHtml(q.result.stats) +
        '<div class="quiz-complete-actions">' +
          '<a class="quiz-primary" href="/game" data-dd-action-name="quiz_return_game">' +
            esc(tx(CHROME.returnToGame)) +
          "</a>" +
          '<button type="button" class="quiz-secondary" data-quiz-again data-dd-action-name="quiz_guess_again">' +
            esc(tx(CHROME.guessAgain)) +
          "</button>" +
        "</div>"
      );
    } else {
      html = shell(stepInnerHtml());
    }
    ensureRoot().innerHTML = html;
    bind();
  }

  function statsHtml(stats) {
    var html = '<div class="quiz-stats">';
    var i;
    for (i = 0; i < stats.length; i += 1) {
      html +=
        '<div class="quiz-stat"><span>' + esc(tx(stats[i].label)) + "</span>" +
        '<div class="quiz-bar"><span style="width:' + stats[i].fill + '%"></span></div></div>';
    }
    return html + "</div>";
  }

  function currentStep() {
    return quiz().steps[state.stepIndex];
  }

  function currentBeat() {
    var step = currentStep();
    if (!step.beats) return null;
    return step.beats[state.beatIndex];
  }

  function stepInnerHtml() {
    var step = currentStep();
    var beat = currentBeat();
    var title = beat && beat.title ? beat.title : step.title;
    var image = beat && beat.image ? beat.image : step.image;
    var hint = beat && beat.hint ? '<p class="quiz-hint">' + esc(tx(beat.hint)) + "</p>" : "";
    var layout = beat ? beat.layout : step.layout;
    var tappable = layout === "tap-scene";
    var choices = beat && beat.choices ? beat.choices : step.choices;
    var body =
      '<p class="quiz-kicker">' + esc(tx(step.kicker)) + "</p>" +
      '<h2 class="quiz-title">' + nl(tx(title)) + "</h2>" +
      sceneHtml(image, tappable) +
      hint;
    if (choices && layout !== "tap-scene") body += cardsHtml(choices, layout);
    body += '<div class="quiz-feedback" hidden></div>';
    return body;
  }

  function bind() {
    var overlay = ensureRoot().querySelector(".quiz-overlay");
    if (!overlay) return;

    overlay.querySelectorAll("[data-quiz-close]").forEach(function (btn) {
      btn.addEventListener("click", close);
    });
    overlay.querySelectorAll("[data-quiz-begin]").forEach(function (btn) {
      btn.addEventListener("click", begin);
    });
    overlay.querySelectorAll("[data-quiz-again]").forEach(function (btn) {
      btn.addEventListener("click", guessAgain);
    });
    overlay.querySelectorAll("[data-choice]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        onChoice(btn.getAttribute("data-choice"), btn);
      });
    });
    overlay.querySelectorAll("[data-tap-scene]").forEach(function (scene) {
      scene.addEventListener("click", function () {
        onSceneTap();
      });
    });
  }

  function feedbackHost() {
    return ensureRoot().querySelector(".quiz-feedback");
  }

  function showWrong(choice, btn) {
    var step = currentStep();
    var beat = currentBeat();
    var title = tx((choice && choice.wrongTitle) || (beat && beat.wrongTitle) || step.wrongTitle || CHROME.notQuite);
    var body = tx((beat && beat.wrongBody) || step.wrongBody || CHROME.tryAnotherBody);
    if (choice) state.feedback = { type: "wrong", choiceId: choice.id };
    if (btn) {
      btn.classList.remove("is-wrong");
      void btn.offsetWidth;
      btn.classList.add("is-wrong");
    }
    var host = feedbackHost();
    host.hidden = false;
    host.innerHTML =
      '<div class="quiz-feedback-title">' + esc(title) + "</div>" +
      '<p class="quiz-feedback-body">' + nl(body) + "</p>" +
      '<button type="button" class="quiz-secondary" data-try-another>' + esc(tx(CHROME.tryAnother)) + "</button>";
    host.querySelector("[data-try-another]").addEventListener("click", function () {
      state.feedback = null;
      host.hidden = true;
      host.innerHTML = "";
      if (btn) btn.classList.remove("is-wrong");
    });
  }

  function advanceAfterCorrect() {
    state.feedback = null;
    if (state.stepIndex >= quiz().steps.length - 1) {
      completeQuiz();
      return;
    }
    state.stepIndex += 1;
    state.beatIndex = 0;
    state.screen = "step";
    startView(quiz().steps[state.stepIndex].view);
    startStepVital(quiz().steps[state.stepIndex].id);
    render();
  }

  function showCorrect(thenAdvance) {
    var step = currentStep();
    var host = feedbackHost();
    var extra = "";
    if (step.extra === "bloom") {
      extra = '<div class="quiz-bloom">' + esc(tx(CHROME.bloom)) + "</div>";
    }
    if (step.extra === "drip") {
      extra = '<div class="quiz-drips" aria-hidden="true"><span>●</span><span>●</span><span>●</span></div>';
    }
    var cards = ensureRoot().querySelector(".quiz-cards");
    if (cards) cards.hidden = true;
    var scene = ensureRoot().querySelector("[data-tap-scene]");
    if (scene) scene.classList.remove("is-tappable");
    host.hidden = false;
    host.innerHTML =
      '<div class="quiz-feedback-title">' + esc(tx(step.correct.title)) + "</div>" +
      extra +
      '<p class="quiz-feedback-body">' + nl(tx(step.correct.body)) + "</p>" +
      '<button type="button" class="quiz-primary" data-advance>' + esc(tx(step.correct.cta)) + "</button>";
    var delay = step.extra === "bloom" ? 1600 : 0;
    var btn = host.querySelector("[data-advance]");
    if (delay) {
      btn.hidden = true;
      setTimeout(function () {
        if (btn) btn.hidden = false;
      }, delay);
    }
    btn.addEventListener("click", thenAdvance);
  }

  function findChoice(id) {
    var step = currentStep();
    var beat = currentBeat();
    var list = beat && beat.choices ? beat.choices : step.choices;
    if (!list) return null;
    var i;
    for (i = 0; i < list.length; i += 1) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function onChoice(id, btn) {
    if (state.locked) return;
    var choice = findChoice(id);
    if (!choice) return;
    var step = currentStep();
    addAction("quiz_step_answered", {
      quiz: quiz().rumKey,
      step: step.id,
      beat: state.beatIndex,
      choice: choice.id,
      correct: !!choice.correct
    });
    if (!choice.correct) {
      showWrong(choice, btn);
      return;
    }
    if (step.beats && state.beatIndex < step.beats.length - 1) {
      state.locked = true;
      state.feedback = null;
      state.beatIndex += 1;
      render();
      return;
    }
    finishStep();
  }

  function onSceneTap() {
    if (state.locked) return;
    var step = currentStep();
    addAction("quiz_step_answered", {
      quiz: quiz().rumKey,
      step: step.id,
      beat: state.beatIndex,
      choice: "finished-cup",
      correct: true
    });
    finishStep();
  }

  function finishStep() {
    if (state.locked) return;
    state.locked = true;
    state.feedback = { type: "correct" };
    var step = currentStep();
    stopStepVital(step.id);
    showCorrect(advanceAfterCorrect);
  }

  function begin() {
    state.startedAt = Date.now();
    state.stepIndex = 0;
    state.beatIndex = 0;
    state.screen = "step";
    state.feedback = null;
    startJourneyVital();
    startView(quiz().steps[0].view);
    startStepVital(quiz().steps[0].id);
    render();
  }

  function guessAgain() {
    state.screen = "opening";
    state.stepIndex = 0;
    state.beatIndex = 0;
    state.feedback = null;
    state.locked = false;
    stopJourneyVital();
    render();
  }

  function completeQuiz() {
    var duration = Date.now() - (state.startedAt || Date.now());
    stopJourneyVital();
    addAction("quiz_completed", {
      quiz: quiz().rumKey,
      duration_ms: duration
    });
    state.screen = "complete";
    state.feedback = null;
    render();
  }

  function onKey(e) {
    if (e.key === "Escape") close();
  }

  function launch(quizId, opts) {
    if (!QUIZZES[quizId]) return;
    opts = opts || {};
    state.quizId = quizId;
    state.screen = "opening";
    state.stepIndex = 0;
    state.beatIndex = 0;
    state.vitalOpen = false;
    state.feedback = null;
    onCloseCallback = typeof opts.onClose === "function" ? opts.onClose : null;
    ensureRoot().hidden = false;
    if (!isPageMode()) document.body.classList.add("quiz-open");
    addAction("quiz_started", { quiz: quizId, source: isPageMode() ? "page" : "cta" });
    render();
    document.addEventListener("keydown", onKey);
  }

  function isOpen() {
    return !!(state.quizId && root && !root.hidden);
  }

  function rerender() {
    if (!isOpen()) return;
    var feedback = state.feedback;
    render({ skipView: true, keepLock: !!(feedback && feedback.type === "correct") });
    if (feedback && feedback.type === "wrong") {
      var choice = findChoice(feedback.choiceId);
      var btn = ensureRoot().querySelector('[data-choice="' + feedback.choiceId + '"]');
      showWrong(choice, btn);
    } else if (feedback && feedback.type === "correct") {
      state.locked = true;
      showCorrect(advanceAfterCorrect);
    }
  }

  function close() {
    stopJourneyVital();
    document.removeEventListener("keydown", onKey);
    if (isPageMode()) {
      window.location.href = "/game";
      return;
    }
    document.body.classList.remove("quiz-open");
    if (root) {
      root.hidden = true;
      root.innerHTML = "";
    }
    restoreGameView();
    if (onCloseCallback) onCloseCallback();
    var input = document.getElementById("challengeInput");
    if (input) {
      input.focus();
      if (typeof input.scrollIntoView === "function") {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  function playCelebration(container) {
    var host = container && container.querySelector(".result-celebrate");
    if (!host) return;
    host.innerHTML = "";
    var colors = ["#F26A21", "#E7A637", "#72B94D", "#F58B24", "#FFF1CF", "#C94C32", "#B7642B"];
    var i;
    for (i = 0; i < 20; i += 1) {
      var p = document.createElement("span");
      p.className = "confetti-piece";
      var angle = (i / 20) * 360 + Math.random() * 14;
      var dist = 72 + Math.random() * 110;
      var rad = (angle * Math.PI) / 180;
      p.style.setProperty("--dx", Math.cos(rad) * dist + "px");
      p.style.setProperty("--dy", Math.sin(rad) * dist + "px");
      p.style.setProperty("--rot", Math.floor(Math.random() * 240 - 120) + "deg");
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 0.14 + "s";
      host.appendChild(p);
    }
  }

  global.QuizGame = {
    launch: launch,
    close: close,
    rerender: rerender,
    isOpen: isOpen,
    playCelebration: playCelebration,
    ids: { longBlack: "long-black", flatWhite: "flat-white" }
  };

  function quizIdFromPath() {
    var match = window.location.pathname.match(/^\/quiz\/(long-black|flat-white)(?:\/|$)/);
    return match ? match[1] : null;
  }

  if (isPageMode()) {
    var pageQuizId = document.body.getAttribute("data-quiz-id") || quizIdFromPath();
    if (pageQuizId && QUIZZES[pageQuizId]) {
      launch(pageQuizId);
    }
  }
})(window);
