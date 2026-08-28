(function (global) {
  "use strict";

  var IMG = "/static/quiz_img/";

  var CHROME = {
    tryAnother: { en: "TRY ANOTHER", vi: "THỬ CÁI KHÁC" },
    guessAgain: { en: "GUESS AGAIN", vi: "ĐOÁN LẠI" },
    bloom: { en: "…blooming…", vi: "…đang nở…" },
    close: { en: "Close quiz", vi: "Đóng quiz" },
    notQuite: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
    tryAnotherBody: { en: "Try another.", vi: "Thử nguyên liệu khác." },
    quizLabel: { en: "Coffee quiz", vi: "Quiz pha cà phê" },
    language: { en: "Language", vi: "Ngôn ngữ" }
  };

  var QUIZZES = {
    "sua-da": {
      id: "sua-da",
      rumKey: "sua-da",
      completeImage: IMG + "milkcoffee_6.png",
      opening: {
        kicker: { en: "Vietnamese iced coffee", vi: "Cà phê sữa đá" },
        title: { en: "MAKE A CÀ PHÊ SỮA ĐÁ", vi: "PHA MỘT LY CÀ PHÊ SỮA ĐÁ" },
        subcopy: {
          en: "Strong. Sweet. Icy.\nThink you know your way around a phin?",
          vi: "Đậm. Ngọt. Lạnh.\nBạn thuộc lòng cái phin chưa?"
        },
        image: IMG + "milkcoffee_6.png",
        cta: { en: "LET’S BREW", vi: "PHA THÔI" }
      },
      result: {
        kicker: { en: "Served", vi: "Dọn ra ly" },
        title: { en: "NGON QUÁ!", vi: "NGON QUÁ!" },
        subtitle: { en: "CÀ PHÊ SỮA ĐÁ: COMPLETE", vi: "CÀ PHÊ SỮA ĐÁ: XONG" },
        body: {
          en: "You nailed the phin, survived the wait, and kept your cool.",
          vi: "Phin chuẩn, chờ được, và giữ được cái lạnh."
        },
        brewLine: { en: "Your brew:", vi: "Ly của bạn:" },
        stars: "★★★★★",
        stats: [
          { label: { en: "Strength", vi: "Đậm" }, fill: 100 },
          { label: { en: "Sweetness", vi: "Ngọt" }, fill: 80 },
          { label: { en: "Patience required", vi: "Cần kiên nhẫn" }, fill: 100 }
        ]
      },
      steps: [
        {
          id: 1,
          view: "step-1",
          kicker: { en: "Step 1 — Pick your coffee", vi: "Bước 1 — Chọn cà phê" },
          title: { en: "WHAT GOES IN THE PHIN?", vi: "CHO GÌ VÀO PHIN?" },
          image: IMG + "milkcoffee_1.png",
          layout: "cards",
          choices: [
            { id: "instant", emoji: "📦", label: { en: "Instant coffee powder", vi: "Cà phê hòa tan" }, correct: false, wrongTitle: { en: "TOO FINE!", vi: "MỊN QUÁ!" } },
            { id: "medium", emoji: "🫘", label: { en: "Medium-ground dark roast coffee", vi: "Cà phê rang đậm xay vừa" }, correct: true },
            { id: "beans", emoji: "🌑", label: { en: "Whole coffee beans", vi: "Hạt cà phê nguyên" }, correct: false, wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" } },
            { id: "espresso", emoji: "⬛", label: { en: "Fine espresso grounds", vi: "Bột espresso xay mịn" }, correct: false, wrongTitle: { en: "TOO FINE!", vi: "MỊN QUÁ!" } }
          ],
          correct: {
            title: { en: "NICE PICK!", vi: "CHỌN HAY!" },
            body: {
              en: "A phin likes a medium grind — coarse enough for water to pass through slowly, but fine enough to brew a strong cup.\n\nVietnamese coffee is often made with dark-roasted Robusta or a Robusta-forward blend.",
              vi: "Phin thích độ xay vừa — thô đủ để nước chảy chậm, nhưng mịn đủ để ra một ly đậm.\n\nCà phê Việt thường dùng Robusta rang đậm, hoặc blend nghiêng Robusta."
            },
            cta: { en: "PHIN READY →", vi: "PHIN XONG →" }
          },
          wrongBody: {
            en: "That one won’t give us the slow, strong phin brew we’re after.",
            vi: "Cái đó không cho ra ly phin chậm và đậm như mình muốn."
          }
        },
        {
          id: 2,
          view: "step-2",
          kicker: { en: "Step 2 — Phin it right", vi: "Bước 2 — Phin cho đúng" },
          title: { en: "COFFEE’S IN. WHAT GOES ON TOP?", vi: "CÀ PHÊ RỒI. CHO GÌ LÊN TRÊN?" },
          image: IMG + "milkcoffee_2.png",
          layout: "cards",
          choices: [
            { id: "spoon", emoji: "🥄", label: { en: "Spoon", vi: "Thìa" }, correct: false },
            { id: "ice", emoji: "🧊", label: { en: "Ice cube", vi: "Viên đá" }, correct: false },
            { id: "press", emoji: "⚙️", label: { en: "Metal filter press", vi: "Gạn phin" }, correct: true },
            { id: "lid", emoji: "🧢", label: { en: "Phin lid", vi: "Nắp phin" }, correct: false }
          ],
          correct: {
            title: { en: "PRESS IT DOWN — GENTLY.", vi: "ẤN XUỐNG — NHẸ THÔI." },
            body: {
              en: "The filter press holds the coffee bed in place while the hot water works its way through.\n\nDon’t pack it too hard — we still need that drip.",
              vi: "Gạn phin giữ lớp cà phê tại chỗ để nước nóng từ từ thấm qua.\n\nĐừng nén quá chặt — vẫn cần cái nhỏ giọt."
            },
            cta: { en: "NEXT: WAKE IT UP →", vi: "TIẾP: ĐÁNH THỨC →" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "That one won’t give us the slow, strong phin brew we’re after.",
            vi: "Cái đó không cho ra ly phin chậm và đậm như mình muốn."
          }
        },
        {
          id: 3,
          view: "step-3",
          kicker: { en: "Step 3 — Wake up the coffee", vi: "Bước 3 — Đánh thức cà phê" },
          title: { en: "BEFORE THE BIG POUR… WHAT FIRST?", vi: "TRƯỚC KHI ĐỔ NHIỀU… LÀM GÌ TRƯỚC?" },
          image: IMG + "milkcoffee_3.png",
          layout: "cards",
          extra: "bloom",
          choices: [
            { id: "cold-milk", emoji: "🥛", label: { en: "Cold milk", vi: "Sữa lạnh" }, correct: false },
            { id: "full-kettle", emoji: "🫖", label: { en: "Full kettle of water", vi: "Cả ấm nước" }, correct: false },
            { id: "splash", emoji: "💧", label: { en: "Small splash of hot water", vi: "Một chút nước nóng" }, correct: true },
            { id: "condensed", emoji: "🥫", label: { en: "Condensed milk", vi: "Sữa đặc" }, correct: false }
          ],
          correct: {
            title: { en: "LET IT BLOOM.", vi: "CHO NÓ NỞ." },
            body: {
              en: "A little hot water wets the grounds first and gets them ready for the main brew.\n\nGive it a moment.",
              vi: "Một chút nước nóng làm ướt bột trước, để cà phê sẵn sàng cho lần đổ chính.\n\nChờ một nhịp."
            },
            cta: { en: "POUR IT UP →", vi: "ĐỔ NƯỚC →" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "That one won’t give us the slow, strong phin brew we’re after.",
            vi: "Cái đó không cho ra ly phin chậm và đậm như mình muốn."
          }
        },
        {
          id: 4,
          view: "step-4",
          kicker: { en: "Step 4 — Slow down, ah", vi: "Bước 4 — Từ từ thôi" },
          title: { en: "THE PHIN IS FULL. NOW WHAT?", vi: "PHIN ĐÃ ĐẦY. GIỜ LÀM GÌ?" },
          image: IMG + "milkcoffee_4.png",
          layout: "actions",
          extra: "drip",
          choices: [
            { id: "press", emoji: "👊", label: { en: "PRESS\nPush the coffee through.", vi: "ẤN\nÉp cà phê chảy xuống." }, correct: false },
            { id: "stir", emoji: "🥄", label: { en: "STIR\nGive everything a mix.", vi: "KHUẤY\nTrộn tất cả lên." }, correct: false },
            { id: "wait", emoji: "⏳", label: { en: "WAIT\nLet gravity do its thing.", vi: "CHỜ\nĐể trọng lực làm việc." }, correct: true },
            { id: "filter", emoji: "📄", label: { en: "FILTER AGAIN\nGrab some filter paper.", vi: "LỌC LẠI\nLấy giấy lọc." }, correct: false }
          ],
          correct: {
            title: { en: "DRIP. DRIP. DRIP.", vi: "NHỎ. NHỎ. NHỎ." },
            body: {
              en: "That slow drip is the whole point.\n\nThe phin produces a concentrated coffee strong enough to stand up to condensed milk and ice.",
              vi: "Cái nhỏ giọt chậm chính là cả bài.\n\nPhin cho ra cà phê đặc, đủ mạnh để đứng vững trước sữa đặc và đá."
            },
            cta: { en: "ALMOST THERE →", vi: "SẮP XONG →" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "Patience. The phin is not a machine you shove around.",
            vi: "Kiên nhẫn. Phin không phải máy để mình thúc."
          }
        },
        {
          id: 5,
          view: "step-5",
          kicker: { en: "Step 5 — Make it iced", vi: "Bước 5 — Cho đá vào" },
          title: { en: "COFFEE DONE. HOW DO WE FINISH IT?", vi: "CÀ PHÊ XONG. HOÀN THIỆN THẾ NÀO?" },
          image: IMG + "milkcoffee_5.png",
          layout: "beats",
          beats: [
            {
              title: { en: "MIX IT?", vi: "KHUẤY KHÔNG?" },
              layout: "actions",
              choices: [
                { id: "stir", emoji: "🥄", label: { en: "STIR", vi: "KHUẤY" }, correct: true },
                { id: "dont", emoji: "🚫", label: { en: "DON’T STIR", vi: "ĐỪNG KHUẤY" }, correct: false }
              ],
              wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
              wrongBody: {
                en: "Give the condensed milk a chance to meet the coffee first.",
                vi: "Cho sữa đặc gặp cà phê trước đã."
              }
            },
            {
              title: { en: "WHERE NEXT?", vi: "TIẾP THEO ĐÂU?" },
              hint: { en: "Tap the glass of ice.", vi: "Chạm vào ly đá." },
              layout: "tap-scene",
              image: IMG + "milkcoffee_6.png"
            }
          ],
          correct: {
            title: { en: "THAT’S THE ONE.", vi: "ĐÚNG LY ĐÓ." },
            body: {
              en: "Strong coffee + sweet condensed milk + plenty of ice.\n\nSimple ingredients. Very serious refreshment.",
              vi: "Cà phê đậm + sữa đặc ngọt + thật nhiều đá.\n\nNguyên liệu đơn giản. Giải khát thì nghiêm túc."
            },
            cta: { en: "SERVE IT!", vi: "DỌN RA LY!" }
          }
        }
      ]
    },
    trung: {
      id: "trung",
      rumKey: "trung",
      completeImage: IMG + "eggcoffee_6.png",
      opening: {
        kicker: { en: "Vietnamese egg coffee", vi: "Cà phê trứng" },
        title: { en: "ROUND TWO: THINGS ARE GETTING EGGY", vi: "VÒNG HAI: TỚI LÚC CÓ TRỨNG" },
        subcopy: {
          en: "Coffee was easy.\nNow let’s turn an egg yolk into something that tastes suspiciously like dessert.",
          vi: "Pha cà phê thì dễ.\nGiờ biến lòng đỏ trứng thành thứ nghe như món tráng miệng."
        },
        image: IMG + "eggcoffee_6.png",
        cta: { en: "CRACK ON", vi: "ĐẬP TRỨNG" }
      },
      result: {
        kicker: { en: "Served", vi: "Dọn ra ly" },
        title: { en: "XONG RỒI!", vi: "XONG RỒI!" },
        subtitle: { en: "CÀ PHÊ TRỨNG: COMPLETE", vi: "CÀ PHÊ TRỨNG: XONG" },
        body: {
          en: "Coffee underneath.\nDessert on top.\nVery sensible arrangement.",
          vi: "Cà phê ở dưới.\nMón ngọt ở trên.\nSắp xếp hợp lý."
        },
        brewLine: { en: "Your cup:", vi: "Ly của bạn:" },
        stars: "★★★★★",
        stats: [
          { label: { en: "Coffee kick", vi: "Độ cà phê" }, fill: 100 },
          { label: { en: "Creaminess", vi: "Độ béo" }, fill: 100 },
          { label: { en: "Dessert energy", vi: "Năng lượng tráng miệng" }, fill: 100 }
        ]
      },
      steps: [
        {
          id: 1,
          view: "step-1",
          kicker: { en: "Step 1 — Start strong", vi: "Bước 1 — Bắt đầu cho đậm" },
          title: { en: "WHAT’S HIDING UNDER ALL THAT EGG CREAM?", vi: "BÊN DƯỚI LỚP KEM TRỨNG LÀ GÌ?" },
          image: IMG + "eggcoffee_1.png",
          layout: "cards",
          choices: [
            { id: "vn-coffee", emoji: "☕", label: { en: "Strong Vietnamese coffee", vi: "Cà phê Việt đậm" }, correct: true },
            { id: "tea", emoji: "🍵", label: { en: "Green tea", vi: "Trà xanh" }, correct: false },
            { id: "steamed", emoji: "🥛", label: { en: "Steamed milk", vi: "Sữa nóng" }, correct: false },
            { id: "coconut", emoji: "🥥", label: { en: "Coconut water", vi: "Nước dừa" }, correct: false }
          ],
          correct: {
            title: { en: "START WITH THE STRONG STUFF.", vi: "BẮT ĐẦU BẰNG THỨ ĐẬM." },
            body: {
              en: "Cà phê trứng begins with concentrated coffee.\n\nThat dark coffee gives the sweet egg cream something bold to sit on.",
              vi: "Cà phê trứng bắt đầu bằng cà phê đặc.\n\nLớp cà phê đậm cho kem trứng ngọt có chỗ để ngồi lên."
            },
            cta: { en: "GET CRACKING →", vi: "ĐẬP TRỨNG →" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "Egg cream needs a bold coffee base, not a stand-in.",
            vi: "Kem trứng cần đế cà phê đậm, không phải đồ thế chỗ."
          }
        },
        {
          id: 2,
          view: "step-2",
          kicker: { en: "Step 2 — Yolk about it", vi: "Bước 2 — Chuyện lòng đỏ" },
          title: { en: "THE EGG’S CRACKED. WHICH PART ARE WE KEEPING?", vi: "TRỨNG ĐÃ ĐẬP. GIỮ PHẦN NÀO?" },
          image: IMG + "eggcoffee_2.png",
          layout: "cards",
          choices: [
            { id: "white", emoji: "🤍", label: { en: "Bowl of egg white", vi: "Bát lòng trắng" }, correct: false },
            { id: "yolk", emoji: "🟡", label: { en: "Golden egg yolk", vi: "Lòng đỏ vàng" }, correct: true },
            { id: "shell", emoji: "🥚", label: { en: "Eggshell", vi: "Vỏ trứng" }, correct: false },
            { id: "boiled", emoji: "🍳", label: { en: "Whole boiled egg", vi: "Trứng luộc nguyên" }, correct: false }
          ],
          correct: {
            title: { en: "YOLK’S ON YOU.", vi: "LÒNG ĐỎ ĐÓ." },
            body: {
              en: "The rich yolk is the base of that famous creamy topping.\n\nEgg white can sit this one out.",
              vi: "Lòng đỏ béo là nền của lớp kem nổi tiếng đó.\n\nLòng trắng ngồi ngoài vòng này."
            },
            cta: { en: "MAKE IT SWEET →", vi: "CHO NGỌT VÀO →" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "We’re after the golden bit — leave the rest of the egg behind.",
            vi: "Mình cần phần vàng — phần còn lại để đó."
          }
        },
        {
          id: 3,
          view: "step-3",
          kicker: { en: "Step 3 — Sweeten the deal", vi: "Bước 3 — Cho ngọt vào" },
          title: { en: "WHAT JOINS THE YOLK?", vi: "GÌ ĐI CÙNG LÒNG ĐỎ?" },
          image: IMG + "eggcoffee_3.png",
          layout: "cards",
          choices: [
            { id: "condensed", emoji: "🥫", label: { en: "Sweetened condensed milk", vi: "Sữa đặc có đường" }, correct: true },
            { id: "sparkling", emoji: "🫧", label: { en: "Sparkling water", vi: "Nước có ga" }, correct: false },
            { id: "soy", emoji: "🧂", label: { en: "Soy sauce", vi: "Nước tương" }, correct: false },
            { id: "butter", emoji: "🧈", label: { en: "Melted butter", vi: "Bơ tan" }, correct: false }
          ],
          correct: {
            title: { en: "SWEET MOVE.", vi: "NGỌT ĐÚNG LÚC." },
            body: {
              en: "Condensed milk gives the mixture sweetness, body and that rich dessert-like character.\n\nNow comes the workout.",
              vi: "Sữa đặc cho hỗn hợp vị ngọt, độ đặc, và cái chất như món tráng miệng.\n\nGiờ tới phần tập tay."
            },
            cta: { en: "WHISK AWAY →", vi: "ĐÁNH KEM →" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "The yolk wants condensed milk — nothing savory, nothing fizzy.",
            vi: "Lòng đỏ cần sữa đặc — đừng mặn, đừng có ga."
          }
        },
        {
          id: 4,
          view: "step-4",
          kicker: { en: "Step 4 — Whip it good", vi: "Bước 4 — Đánh cho bông" },
          title: { en: "WHEN DO WE STOP WHISKING?", vi: "ĐÁNH ĐẾN KHI NÀO DỪNG?" },
          image: IMG + "eggcoffee_4.png",
          layout: "stages",
          choices: [
            { id: "runny", emoji: "", label: { en: "RUNNY\nDark yellow and thin.", vi: "LOÃNG\nVàng đậm và loãng." }, swatch: "runny", correct: false },
            { id: "creamy", emoji: "", label: { en: "CREAMY\nLighter but still loose.", vi: "SỆT\nNhạt hơn nhưng vẫn lỏng." }, swatch: "creamy", correct: false },
            { id: "fluffy", emoji: "", label: { en: "THICK + FLUFFY\nPale, airy, soft peaks.", vi: "DÀY + BÔNG\nNhạt, xốp, đỉnh mềm." }, swatch: "fluffy", correct: true }
          ],
          correct: {
            title: { en: "THERE IT IS.", vi: "ĐÓ RỒI." },
            body: {
              en: "Whisking adds air until the yolk and condensed milk become thick, pale and velvety.\n\nThat fluffy texture is what makes egg coffee feel almost like a dessert.",
              vi: "Đánh kem cho không khí vào đến khi lòng đỏ và sữa đặc đặc, nhạt màu và mượt.\n\nCái xốp đó khiến cà phê trứng gần như món tráng miệng."
            },
            cta: { en: "BUILD THE CUP →", vi: "DỰNG LY →" }
          },
          wrongTitle: { en: "KEEP GOING!", vi: "ĐÁNH TIẾP!" },
          wrongBody: {
            en: "Not there yet — we want pale, airy, and thick enough to sit on the coffee.",
            vi: "Chưa tới — cần nhạt, xốp, và đặc đủ để ngồi trên cà phê."
          }
        },
        {
          id: 5,
          view: "step-5",
          kicker: { en: "Step 5 — The grand finale", vi: "Bước 5 — Màn kết" },
          title: { en: "COFFEE: READY.\nCREAM: READY.\nNOW WHAT?", vi: "CÀ PHÊ: XONG.\nKEM: XONG.\nGIỜ LÀM GÌ?" },
          image: IMG + "eggcoffee_5.png",
          layout: "cards",
          choices: [
            { id: "spoon", emoji: "🥄", label: { en: "Spoon the cream over the coffee", vi: "Múc kem lên cà phê" }, correct: true },
            { id: "ice", emoji: "🧊", label: { en: "Mix everything with ice", vi: "Trộn tất cả với đá" }, correct: false },
            { id: "pour-away", emoji: "🫗", label: { en: "Pour the coffee away", vi: "Đổ cà phê đi" }, correct: false },
            { id: "raw", emoji: "🟡", label: { en: "Drop in a raw yolk", vi: "Thả lòng đỏ sống" }, correct: false }
          ],
          correct: {
            title: { en: "LOOK AT THOSE LAYERS.", vi: "NHÌN MẤY LỚP ĐÓ." },
            body: {
              en: "Dark Vietnamese coffee underneath.\nThick golden egg cream on top.\n\nSip through both and you get bitter, sweet and creamy in one go.",
              vi: "Cà phê Việt đậm ở dưới.\nKem trứng vàng dày ở trên.\n\nHút cả hai lớp: đắng, ngọt, béo một lần."
            },
            cta: { en: "SERVE IT!", vi: "DỌN RA LY!" }
          },
          wrongTitle: { en: "NOT QUITE!", vi: "CHƯA ỔN!" },
          wrongBody: {
            en: "Keep the layers. Spoon the cream onto the coffee — don’t stir it into ice.",
            vi: "Giữ các lớp. Múc kem lên cà phê — đừng khuấy với đá."
          }
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

  function lang() {
    return localStorage.getItem("ctf_lang") === "en" ? "en" : "vi";
  }

  function tx(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang()] || value.en || value.vi || "";
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

  function viewName(screen) {
    return "/game/quiz/" + quiz().rumKey + "/" + screen;
  }

  function startView(screen) {
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

  function langToggleHtml() {
    var current = lang();
    return (
      '<div class="lang-toggle quiz-lang-toggle" role="group" aria-label="' + esc(tx(CHROME.language)) + '">' +
        '<button type="button" class="lang-btn' + (current === "vi" ? " is-active" : "") + '" data-quiz-lang="vi">VI</button>' +
        '<button type="button" class="lang-btn' + (current === "en" ? " is-active" : "") + '" data-quiz-lang="en">EN</button>' +
      "</div>"
    );
  }

  function shell(inner) {
    return (
      '<div class="quiz-overlay" role="dialog" aria-modal="true" aria-label="' + esc(tx(CHROME.quizLabel)) + '">' +
        '<div class="quiz-shell">' +
          '<div class="quiz-topbar">' +
            langToggleHtml() +
            '<div class="quiz-progress" aria-hidden="true">' + progressHtml() + "</div>" +
            '<button type="button" class="quiz-close" data-quiz-close aria-label="' + esc(tx(CHROME.close)) + '">×</button>' +
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
        '<button type="button" class="quiz-primary" data-quiz-again data-dd-action-name="quiz_guess_again">' +
          esc(tx(CHROME.guessAgain)) +
        "</button>"
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
      btn.addEventListener("click", close);
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
    overlay.querySelectorAll("[data-quiz-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-quiz-lang");
        if (typeof global.setLanguage === "function") {
          global.setLanguage(next);
        } else {
          localStorage.setItem("ctf_lang", next === "en" ? "en" : "vi");
          rerender();
        }
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
      choice: "ice-glass",
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
    document.body.classList.add("quiz-open");
    addAction("quiz_started", { quiz: quizId, source: "cta" });
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
    ids: { milk: "sua-da", egg: "trung" }
  };
})(window);
