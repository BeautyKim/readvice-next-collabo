export const analyzeNextSteps = (step, userResponse) => {
    return step === 0
      ? {
          purpose: "specify field",
          message: `안녕하세요, ${userResponse}님! 무엇이 필요하신가요? ~*^v^*~`,
          options: ["대화", "책 추천", "내 근처 도서관"]
        }
      : step === 1
      ? {
          purpose: "specify experience",
          message:
            "오늘 기분은 어떠세요?"
        }
      : step === 2
      ? {
          purpose: "specify projects",
          message:
            "만화책도 좋아하세요? 요즘 웹툰 조조코믹스가 정말 재밌어요~!"
        }
      : step === 3
      ? {
          purpose: "specify personality",
          message:
            "가장 가까운 도서관으로는 강남도서관이 있어요."
        }
      : step === 4
      ? {
          purpose: "prompt company info",
          message: "Do you want me to explain what we do?",
          options: ["Yeah sure!", "Meh, I'll pass"]
        }
      : step === 5
      ? userResponse === "Yeah sure!"
        ? {
            purpose: "tell company info",
            message: "Oh yay! This is what we do...",
            options: ["Keep going."]
          }
        : {
            purpose: "not tell company info",
            message: "Aww... Well I guess you know what we do already.",
            options: ["Keep going."]
          }
      : step === 6
      ? {
          purpose: "specify reason to work",
          message:
            "Now that you know what we do, how about you tell me why you want to work for us?"
        }
      : step === 7
      ? {
          purpose: "specify hobbies",
          message:
            "Alright, noted! One last question before we finish, besides coding/working, what do you do?"
        }
      : step === 8
      ? {
          purpose: "specify email",
          message:
            "That sounds awesome! Right, it looks like we've got your application set. I would need your email to contact you if you're a good fit for this role!"
        }
      : step === 9
      ? {
          purpose: "end",
          message:
            "Thank you so much for spending time chatting with me. Good luck with the application process! I hope we can meet soon. Bye!"
        }
      : {
          purpose: "bye",
          message: "Bye!"
        };
  };
  