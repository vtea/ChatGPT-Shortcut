import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "英语对话学习和纠正",
    "prompt": "规则如下:\n我：-输入:{我会用英文输入语句}\n你：评价:{请你对我的输入语句进行判断，判断我的语法、单词拼写有没有错误，并帮我纠正}\n-更地道的表达方式:{将我的输入语句进行修改，改成更加地道的表达方式输出:{回答我的输入语句，用通俗易懂的语言，需要用英文}\n-翻译:{翻译你的输出}\n示例:\n我：输入:how can i improve my english fast\n你：评价：你的句子语法没有错误，但是单词拼写有一个错误，\"english\"应该是大写的\"E\"。\n更地道的表达方式:How can Iquickly improve my English skills? 输出:There are several ways to improve your English quicklyFirst,practice speaking and listening to English as much as possible.You can do this by watching English movies, TV shows, or listening to English podcasts. Secondtry to read English books or articles and learn new words every day.Third,take an English course or find a tutor who can help you practice and give you feedback. Consistent practice and exposure to the language is key to improving quickly.\n翻译：有几种方法可以快速提高你的英语水平。首先，尽可能多地练习英语口语和听力。你可以通过观看英语电影、电视节目或听英语播客来实现这一点。其次，尝试阅读英语书籍或文章，并每天学习新单词。第三，参加英语课程或找到一位能帮助你练习并给予反馈的家教。坚持练习和接触英语是快速提高的关键。\n\n如果你明白了以上规则，就告诉我明白了，接下来的对话我们都要遵守这个规则。",
    "description": "规则如下:\n我：-输入:{我会用英文输入语句}\n你：评价:{请你对我的输入语句进行判断，判断我的语法、单词拼写有没有错误，并帮我纠正}\n-更地道的表达方式:{将我的输入语句进行修改，改成更加地道的表达方式输出:{回答我的输入语句，用通俗易懂的语言，需要用英文}\n-翻译:{翻译你的输出}\n示例:\n我：输入:how can i improve my english fast\n你：评价：你的句子语法没有错误，但是单词拼写有一个错误，\"english\"应该是大写的\"E\"。\n更地道的表达方式:How can Iquickly improve my English skills? 输出:There are several ways to improve your English quicklyFirst,practice speaking and listening to English as much as possible.You can do this by watching English movies, TV shows, or listening to English podcasts. Secondtry to read English books or articles and learn new words every day.Third,take an English course or find a tutor who can help you practice and give you feedback. Consistent practice and exposure to the language is key to improving quickly.\n翻译：有几种方法可以快速提高你的英语水平。首先，尽可能多地练习英语口语和听力。你可以通过观看英语电影、电视节目或听英语播客来实现这一点。其次，尝试阅读英语书籍或文章，并每天学习新单词。第三，参加英语课程或找到一位能帮助你练习并给予反馈的家教。坚持练习和接触英语是快速提高的关键。\n\n如果你明白了以上规则，就告诉我明白了，接下来的对话我们都要遵守这个规则。",
    "remark": "通过评论、修正英语和翻译三方面来进行英语学习，拯救你的塑料英语。来自 @wxhzhwxhzh 的投稿。"
  },
  "en": {
    "title": "English learning for Chinese",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules.",
    "remark": "Engage in English learning through three facets of commenting, correcting English, and translating, and rescue yourself from rudimentary English. Contributed by @wxhzhwxhzh."
  },
  "ja": {
    "title": "英会話学習・添削",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Janpanese. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "ルールは以下の通りです。\n私：-入力:{私は英語で文を打つことができます}。\nYou: -evaluate:{私の入力文を判断し、文法や単語のスペルが間違っていないか判断し、修正するのを手伝ってください}。\n-より本格的な表現:{私の入力文をより本格的な表現に修正する出力:{私の入力文に平易な言葉で答えてください、英語である必要があります}。\n-翻訳:{アウトプットを翻訳してください}。\n例\n私：入力：どうしたら早く英語を上達させることができるのか\nあなた：コメント：あなたの文章には文法的な間違いはありませんが、\"english \"という単語のスペルに 1 つ誤りがあり、大文字の \"E \"になるはずです。\nアウトプット：英語を早く上達させるには、いくつかの方法がありますまず、できるだけ英語を話したり聞いたりする練習をしましょう。英語の映画やテレビ番組を見たり、英語のポッドキャストを聞いたりすることで、これを行うことができます。3 つ目は、英語コースを受講するか、練習を手伝ってくれてフィードバックをくれる家庭教師を見つけることです。一貫した練習と言語への接触が、早く上達するための鍵です。\n翻訳：英語を早く上達させるには、いくつかの方法があります。まず、できるだけ英語で話したり聞いたりする練習をすることです。英語の映画やテレビ番組を見たり、英語のポッドキャストを聞いたりすることで、これを行うことができます。次に、英語の本や記事を読み、毎日新しい単語を覚えることです。3 つ目は、英語コースを受講したり、練習を手伝ってくれたりフィードバックをくれる家庭教師を見つけることです。継続的な練習と英語に触れることが、短期間での上達のカギとなります。\n\n以上のルールを理解したら、「わかった」と伝えてください。その後の会話は、全員このルールに従うことになります。",
    "remark": "コメント、添削された英語、翻訳であなたのプラスチック英語を保存します。wxhzhwxhzh さん（@wxhzh）からの寄稿です。"
  },
  "ko": {
    "title": "영어 회화 학습 및 교정",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Korean. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "규칙은 다음과 같습니다.\n나: - 입력:{영어로 문장을 입력할 수 있습니다}\n당신:-평가:{내 입력 문장을 판단하고, 문법과 단어 철자가 틀렸는지 확인하고, 수정할 수 있도록 도와주세요}\n-더 정확한 표현 :{내 입력 문을 더 정확한 표현으로 수정해 주세요출력 :{내 입력 문을 영어로 된 평이한 언어로 답변해 주세요}\n-번역:{출력물 번역}\n예시\n나: 입력:어떻게 하면 영어를 빨리 향상시킬 수 있을까요?\n사용자: 댓글: 문장에 문법적인 오류는 없지만 대문자 \"E\"가 되어야 하는 \"english\"라는 단어의 철자에 한 가지 오류가 있습니다.\n어떻게 하면 영어 실력을 빠르게 향상시킬 수 있나요? 산출: 영어 실력을 빠르게 향상시키는 방법에는 여러 가지가 있습니다. 먼저, 가능한 한 영어 말하기와 듣기 연습을 많이 하세요. 영어 영화나 TV 프로그램을 보거나 영어 팟캐스트를 들으며 영어 말하기와 듣기 연습을 할 수 있습니다. 셋째, 영어 강좌를 수강하거나 연습을 도와주고 피드백을 줄 수 있는 튜터를 찾아보세요. 꾸준히 연습하고 언어에 노출되는 것이 빠른 실력 향상을 위한 핵심입니다.\n번역: 영어 실력을 빠르게 향상시킬 수 있는 방법에는 여러 가지가 있습니다. 첫째, 가능한 한 영어로 말하고 듣는 연습을 많이 하세요. 영어 영화나 TV 프로그램을 보거나 영어 팟캐스트를 들으며 영어 말하기와 듣기 연습을 할 수 있습니다. 둘째, 영어로 된 책이나 기사를 읽고 매일 새로운 단어를 배우세요. 셋째, 영어 강좌를 듣거나 연습을 도와주고 피드백을 줄 수 있는 튜터를 찾아보세요. 꾸준한 연습과 영어 노출이 빠른 실력 향상의 열쇠입니다.\n\n위의 규칙을 이해하셨다면 이해했다고 말씀해 주시면 나머지 대화에서도 이 규칙을 지켜야 합니다.",
    "remark": "댓글, 수정된 영어 및 번역으로 플라스틱 영어를 저장하세요. wxhzhwxhzh 의 기여."
  },
  "es": {
    "title": "Aprendizaje y corrección de diálogos en inglés",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Spanish. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules..",
    "description": "Las reglas son las siguientes.\nI: - Input:{Puedo introducir enunciados en inglés}\nTú: -Evaluación:{Por favor, evalúa mi declaración, juzga si hay errores gramaticales y ortográficos y ayúdame a corregirlos}.\n-Expresión más auténtica:{Modifique mi enunciado de entrada a una expresión más auténticaSalida:{Responda a mi enunciado de entrada en un lenguaje fácil de entender, que debe ser en inglés}.\n-Traducir:{Traducir la respuesta}\nEjemplo\nYo: Input:¿cómo puedo mejorar mi inglés rápidamente?\nTú: Evaluación: Tu frase no tiene errores gramaticales, pero hay un error en la ortografía de la palabra \"english\", que debería escribirse con \"E\" mayúscula.\n¿Cómo puedo mejorar mi nivel de inglés rápidamente? Resultado:Hay varias formas de mejorar tu nivel de inglés rápidamenteEn primer lugar, practica hablar y escuchar inglés tanto como puedas. Puedes hacerlo viendo películas en inglés, programas de televisión o escuchando podcasts en inglés.En segundo lugar,intenta leer libros o artículos en inglés y aprende palabras nuevas cada día. En segundo lugar, intenta leer libros o artículos en inglés y aprender nuevas palabras cada día. En tercer lugar, haz un curso de inglés o busca un profesor particular que te ayude a practicar y te dé su opinión. La práctica constante y la exposición al idioma son la clave para mejorar rápidamente.\nLa práctica constante y la exposición al idioma son fundamentales para mejorar rápidamente. En primer lugar, practica todo lo que puedas hablar y escuchar en inglés. Puedes hacerlo viendo películas o programas de televisión en inglés o escuchando podcasts en inglés. En segundo lugar, lee libros o artículos en inglés y aprende palabras nuevas cada día. En tercer lugar, haz un curso de inglés o busca un profesor particular que te ayude a practicar y te dé consejos. La práctica constante y la exposición al inglés son la clave para mejorar rápidamente.\n\nSi entiendes la regla anterior, dime que la entiendo y tendremos que seguirla el resto de la conversación.",
    "remark": "Salva tu inglés de plástico con un triple enfoque para aprender inglés comentando, corrigiendo inglés y traduciendo. Contribuciones de @wxhzhwxhzh."
  },
  "fr": {
    "title": "Apprentissage et correction du dialogue en anglais",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in French. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "Les règles sont les suivantes.\nI : - Entrée:{Je peux entrer des déclarations en anglais}\nYou : -Evaluation:{Veuillez évaluer ma déclaration, juger s'il y a des fautes de grammaire et d'orthographe, et m'aider à les corriger}\n-Expression plus authentique:{Modifier ma déclaration en une expression plus authentiqueProduction:{Répondre à ma déclaration dans un langage facile à comprendre, qui doit être en anglais}\n-Traduire:{Traduire votre résultat}\nExemple.\nMoi : Entrée : comment puis-je améliorer mon anglais rapidement ?\nVous : Évaluation : Votre phrase ne contient aucune erreur grammaticale, mais il y a une faute d'orthographe dans le mot \"english\", qui devrait s'écrire avec un \"E\" majuscule.\nComment puis-je améliorer rapidement mes compétences en anglais ? Résultat:Il y a plusieurs façons d'améliorer rapidement votre anglais.Tout d'abord, pratiquez l'expression orale et l'écoute de l'anglais autant que possible. Vous pouvez le faire en regardant des films ou des émissions de télévision en anglais, ou en écoutant des podcasts en anglais. Deuxièmement, essayez de lire des livres ou des articles en anglais et apprenez de nouveaux mots tous les jours. Deuxièmement, essayez de lire des livres ou des articles en anglais et d'apprendre de nouveaux mots tous les jours. Troisièmement, suivez un cours d'anglais ou trouvez un tuteur qui peut vous aider à pratiquer et vous donner des commentaires. La pratique régulière et l'exposition à la langue sont la clé d'une amélioration rapide.\nLa pratique régulière et l'exposition à la langue sont la clé d'une amélioration rapide. Tout d'abord, entraînez-vous à parler et à écouter en anglais autant que possible. Vous pouvez le faire en regardant des films et des programmes télévisés en anglais ou en écoutant des podcasts en anglais. Deuxièmement, essayez de lire des livres ou des articles en anglais et apprenez de nouveaux mots chaque jour. Troisièmement, suivez un cours d'anglais ou trouvez un tuteur qui pourra vous aider à pratiquer et vous donner un retour d'information. Une pratique et une exposition constantes à l'anglais sont la clé d'une amélioration rapide.\n\nSi vous comprenez la règle ci-dessus, dites-moi que je la comprends et nous devrons tous la suivre pour le reste de la conversation.",
    "remark": "Sauvez votre anglais plastique avec une approche à trois volets de l'apprentissage de l'anglais à travers les commentaires, la correction de l'anglais et la traduction. Contributions de @wxhzhwxhzh."
  },
  "de": {
    "title": "Lernen und Korrigieren von englischen Dialogen",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in German. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "Die Regeln lauten wie folgt.\nIch: - Eingabe:{Ich kann Aussagen auf Englisch eingeben}\nSie: -Evaluation:{Bewerten Sie bitte meine Eingabe, beurteilen Sie, ob es Fehler in meiner Grammatik und Rechtschreibung gibt, und helfen Sie mir, diese zu korrigieren}\n-authentischerer Ausdruck:{Ändern Sie meine Eingabe in einen authentischeren AusdruckAusgabe:{Antworten Sie auf meine Eingabe in leicht verständlicher Sprache, die auf Englisch sein muss}\n-Übersetzen:{Übersetzen Sie Ihren Output}\nBeispiel.\nIch: Input:wie kann ich mein Englisch schnell verbessern\nSie: Auswertung: Ihr Satz hat keine grammatikalischen Fehler, aber es gibt einen Fehler in der Schreibweise des Wortes \"english\", das mit einem großen \"E\" geschrieben werden sollte.\nWie kann ich meine Englischkenntnisse schnell verbessern? Ergebnis: Es gibt mehrere Möglichkeiten, um Ihr Englisch schnell zu verbessern: Erstens, üben Sie so viel wie möglich Englisch zu sprechen und zu hören. Dies können Sie tun, indem Sie sich englische Filme und Fernsehsendungen ansehen oder englische Podcasts anhören. Zweitens: Versuchen Sie, englische Bücher oder Artikel zu lesen und lernen Sie jeden Tag neue Wörter. Zweitens: Versuchen Sie, englische Bücher oder Artikel zu lesen und jeden Tag neue Wörter zu lernen. Drittens: Nehmen Sie an einem Englischkurs teil oder suchen Sie sich einen Tutor, der Ihnen beim Üben hilft und Ihnen Feedback gibt. Beständiges Üben und der Umgang mit der Sprache sind der Schlüssel zu einer schnellen Verbesserung.\nKonsequentes Üben und ein intensiver Kontakt mit der Sprache sind der Schlüssel zu schnellen Fortschritten. Üben Sie zunächst das Sprechen und Hören der englischen Sprache so oft wie möglich. Dies können Sie tun, indem Sie sich englische Filme und Fernsehsendungen ansehen oder englische Podcasts anhören. Zweitens: Versuchen Sie, englische Bücher oder Artikel zu lesen, und lernen Sie jeden Tag neue Wörter. Drittens: Nehmen Sie an einem Englischkurs teil oder suchen Sie sich einen Tutor, der Ihnen beim Üben helfen und Ihnen Feedback geben kann. Beständiges Üben und der Kontakt mit der englischen Sprache sind der Schlüssel zu einer schnellen Verbesserung.\n\nWenn Sie die obige Regel verstanden haben, sagen Sie mir, dass ich sie verstanden habe, und wir müssen sie für den Rest des Gesprächs befolgen.",
    "remark": "Retten Sie Ihr Plastik-Englisch mit einem dreigleisigen Ansatz zum Englischlernen durch Kommentieren, Korrigieren und Übersetzen. Beiträge von @wxhzhwxhzh."
  },
  "it": {
    "title": "Apprendimento e correzione dei dialoghi in inglese",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Italian. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "Le regole sono le seguenti.\nIo: - Input:{Posso inserire dichiarazioni in inglese}\nTu: -Valutazione:{Per favore, giudica la mia dichiarazione di input, valuta se ci sono errori di grammatica e di ortografia e aiutami a correggerli}.\n-Espressione più autentica:{Modifica la mia affermazione in un'espressione più autenticaOutput:{Risponde alla mia affermazione in un linguaggio facile da capire, che deve essere in inglese}.\n-Translate:{Traduci il tuo output}\nEsempio.\nIo: Input: come posso migliorare il mio inglese velocemente?\nTu: Valutazione: la tua frase non presenta errori grammaticali, ma c'è un errore nell'ortografia della parola \"english\", che dovrebbe essere scritta con la \"E\" maiuscola.\nCome posso migliorare rapidamente la mia conoscenza dell'inglese? Risposta: Ci sono diversi modi per migliorare rapidamente il proprio inglese. Potete farlo guardando film e programmi televisivi in inglese o ascoltando podcast in inglese. In secondo luogo, cercate di leggere libri o articoli in inglese e imparate nuove parole ogni giorno. In secondo luogo, cercate di leggere libri o articoli in inglese e di imparare nuove parole ogni giorno. In terzo luogo, seguite un corso di inglese o trovate un tutor che vi aiuti a fare pratica e vi dia un feedback. La pratica e l'esposizione costante alla lingua sono fondamentali per migliorare rapidamente.\nLa pratica e l'esposizione costante alla lingua sono fondamentali per migliorare rapidamente. In primo luogo, esercitatevi a parlare e ad ascoltare in inglese il più possibile. Potete farlo guardando film e programmi televisivi in inglese o ascoltando podcast in inglese. In secondo luogo, provate a leggere libri o articoli in inglese e imparate nuove parole ogni giorno. In terzo luogo, seguite un corso di inglese o trovate un tutor che vi aiuti a fare pratica e vi dia un feedback. La pratica e l'esposizione costante all'inglese sono la chiave per un rapido miglioramento.\n\nSe capite la regola di cui sopra, ditemi che l'avete capita e dovremo tutti seguirla per il resto della conversazione.",
    "remark": "Salva il tuo inglese plastico con un approccio tripartito all'apprendimento dell'inglese attraverso commenti, correzioni e traduzioni. Contributi di @wxhzhwxhzh."
  },
  "ru": {
    "title": "Обучение и коррекция диалогов на английском языке",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Russian. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "Правила следующие.\nЯ: - Ввод:{Я могу вводить высказывания на английском языке}\nВы: -Оценка:{Пожалуйста, оцените мое входное высказывание, определите, есть ли ошибки в грамматике и написании слов, и помогите мне их исправить}\n-Более аутентичное выражение:{Измените мое входное высказывание на более аутентичное выражениеВывод:{Ответьте на мое входное высказывание понятным языком, который должен быть на английском}\n-Перевод:{Перевести свой вывод}\nПример.\nЯ: Вводная часть: как я могу быстро улучшить свой английский язык\nВы: Оценка: В вашем предложении нет грамматических ошибок, но есть ошибка в написании слова \"english\", которое должно писаться с большой буквы \"E\".\nКак я могу быстро улучшить свои знания английского языка? Вывод:Есть несколько способов быстро улучшить свои знания английского языкаВо-первых, как можно больше практикуйте разговорную речь и аудирование английского языка. Для этого можно смотреть фильмы на английском языке, телепередачи или слушать подкасты на английском языке. Во-вторых, старайтесь читать книги или статьи на английском языке и каждый день узнавать новые слова. Для этого можно смотреть фильмы, телепередачи или слушать подкасты на английском языке. Во-вторых, старайтесь читать книги или статьи на английском языке и каждый день узнавать новые слова. В-третьих, запишитесь на курсы английского языка или найдите репетитора, который поможет вам практиковаться и даст обратную связь. Последовательная практика и знакомство с языком - ключ к быстрому совершенствованию.\nПостоянная практика и знакомство с языком - залог быстрого совершенствования. Во-первых, как можно чаще практикуйте разговорную речь и аудирование на английском языке. Для этого можно смотреть англоязычные фильмы, телепередачи или слушать англоязычные подкасты. Во-вторых, попробуйте читать английские книги или статьи и каждый день узнавать новые слова. В-третьих, запишитесь на курсы английского языка или найдите репетитора, который поможет вам практиковаться и даст обратную связь. Постоянная практика и знакомство с английским языком - это ключ к быстрому совершенствованию.\n\nЕсли вы поняли приведенное выше правило, скажите, что я его понял, и нам всем придется следовать ему до конца разговора.",
    "remark": "Спасите свой пластиковый английский с помощью трехстороннего подхода к изучению английского языка через комментирование, исправление английского и перевод. Материалы от @wxhzhwxhzh."
  },
  "pt": {
    "title": "Aprendizagem e correção de diálogos em inglês",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Portuguese. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "As regras são as seguintes.\nEu: - Entrada:{Eu posso introduzir afirmações em inglês}\nVocê: -Avaliação:{Por favor, avalie a minha declaração de entrada, julgue se há erros na minha gramática e ortografia e ajude-me a corrigi-los}\n-Expressão mais autêntica:{Modifique a minha frase de entrada para uma expressão mais autênticaOutput:{Responda à minha frase de entrada numa linguagem fácil de compreender, que tem de ser em inglês}\n-Translate:{Traduzir o seu output}\nExemplo.\nEu: Input:como posso melhorar o meu inglês rapidamente\nVocê: Avaliação: A sua frase não tem erros gramaticais, mas há um erro na ortografia da palavra \"english\", que deve ser escrita com um \"E\" maiúsculo.\nComo posso melhorar rapidamente os meus conhecimentos de inglês? Output:Existem várias formas de melhorar rapidamente o seu inglêsPrimeiro, pratique falar e ouvir inglês tanto quanto possível. Pode fazê-lo vendo filmes e programas de televisão em inglês ou ouvindo podcasts em inglês. Em segundo lugar, tente ler livros ou artigos em inglês e aprenda palavras novas todos os dias. Em segundo lugar, tente ler livros ou artigos em inglês e aprenda novas palavras todos os dias. Em terceiro lugar, faça um curso de inglês ou encontre um tutor que o ajude a praticar e lhe dê feedback. A prática consistente e a exposição à língua são fundamentais para melhorar rapidamente.\nA prática consistente e a exposição à língua são a chave para melhorar rapidamente. Em primeiro lugar, pratique falar e ouvir em inglês o mais que puder. Pode fazê-lo vendo filmes e programas de televisão em inglês ou ouvindo podcasts em inglês. Em segundo lugar, tente ler livros ou artigos em inglês e aprenda novas palavras todos os dias. Em terceiro lugar, frequente um curso de inglês ou encontre um tutor que o ajude a praticar e lhe dê feedback. A prática consistente e a exposição ao inglês são a chave para uma melhoria rápida.\n\nSe compreende a regra acima, diga-me que a compreendo e teremos de a seguir durante o resto da conversa.",
    "remark": "Salve o seu inglês de plástico com uma abordagem tripla à aprendizagem de inglês através de comentários, correção de inglês e tradução. Contribuições de @wxhzhwxhzh."
  },
  "hi": {
    "title": "अंग्रेजी वार्तालाप सीखना और सुधार",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Hindi. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "नियम इस प्रकार हैं: I: - इनपुट: {मैं अंग्रेजी में वाक्य इनपुट कर सकता हूं} आप: मूल्यांकन: {कृपया मेरे इनपुट वाक्यों का मूल्यांकन करें, निर्णय लें कि मेरा व्याकरण और वर्तनी गलत है या नहीं, और उन्हें सही करने में मेरी सहायता करें} - अधिक प्रामाणिक अभिव्यक्ति विधि: {मेरे इनपुट वाक्य को संशोधित करें और इसे अधिक प्रामाणिक अभिव्यक्ति आउटपुट में बदलें: {मेरे इनपुट वाक्य का उत्तर स्पष्ट और आसानी से समझ में आने वाली भाषा में दें, और अंग्रेजी आवश्यक है} -अनुवाद: {अपने आउटपुट का अनुवाद करें} उदाहरण: मैं: इनपुट : मैं अपनी अंग्रेजी तेजी से कैसे सुधार सकता हूं आप: मूल्यांकन: आपके वाक्य में कोई व्याकरण संबंधी त्रुटि नहीं है, लेकिन शब्द में वर्तनी की त्रुटि है, &quot;अंग्रेजी&quot; को बड़ा अक्षर &quot;ई&quot; होना चाहिए। अधिक प्रामाणिक अभिव्यक्ति: मैं अपने अंग्रेजी कौशल को जल्दी से कैसे सुधार सकता हूं? आउटपुट: अपनी अंग्रेजी को जल्दी से सुधारने के कई तरीके हैं, सबसे पहले, जितना संभव हो उतना अंग्रेजी बोलने और सुनने का अभ्यास करें। आप अंग्रेजी फिल्में, टीवी शो देखकर या सुनकर ऐसा कर सकते हैं अंग्रेजी पॉडकास्ट। दूसरा, अंग्रेजी किताबें या लेख पढ़ने और हर दिन नए शब्द सीखने का प्रयास करें। तीसरा, एक अंग्रेजी पाठ्यक्रम लें या एक ट्यूटर ढूंढें जो आपको अभ्यास करने में मदद कर सके और आपको प्रतिक्रिया दे सके। भाषा में लगातार अभ्यास और अनुभव सुधार की कुंजी है शीघ्रता से। अनुवाद करें: अपनी अंग्रेजी शीघ्रता से सुधारने के कई तरीके हैं। सबसे पहले जितना हो सके अंग्रेजी बोलने और सुनने का अभ्यास करें। आप अंग्रेजी फिल्में, टीवी शो देखकर या अंग्रेजी पॉडकास्ट सुनकर ऐसा कर सकते हैं। दूसरा, अंग्रेजी किताबें या लेख पढ़ने और हर दिन नए शब्द सीखने का प्रयास करें। तीसरा, अंग्रेजी कक्षाएं लें या एक ट्यूटर ढूंढें जो आपको अभ्यास करने और प्रतिक्रिया देने में मदद कर सके। लगातार अभ्यास और अंग्रेजी का ज्ञान तेजी से सुधार की कुंजी है। यदि आप उपरोक्त नियमों को समझते हैं, तो मुझे बताएं, और हमें निम्नलिखित बातचीत में इस नियम का पालन करना होगा।",
    "remark": "अपनी प्लास्टिक अंग्रेजी को बचाने के लिए टिप्पणी करके, अंग्रेजी को सही करके और अनुवाद करके अंग्रेजी सीखें। @wxhzhwxhzh से योगदान।"
  },
  "ar": {
    "title": "تعلم المحادثة باللغة الإنجليزية وتصحيحها",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Arabic. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "القواعد هي كما يلي: I: - الإدخال: {يمكنني إدخال جمل باللغة الإنجليزية} أنت: التقييم: {يرجى الحكم على جمل الإدخال الخاصة بي ، والحكم على ما إذا كانت القواعد والتهجئة الخاصة بي خاطئة ، وساعدني في تصحيحها} - أكثر أصالة التعبير الطريقة: {تعديل جملة الإدخال الخاصة بي وتغييرها إلى إخراج تعبير أكثر أصالة: {أجب جملة الإدخال بلغة واضحة وسهلة الفهم ، واللغة الإنجليزية مطلوبة} - الترجمة: {ترجم مخرجاتك} مثال: أنا: إدخال : كيف يمكنني تحسين لغتي الإنجليزية السريعة أنت: التقييم: لا يوجد خطأ نحوي في جملتك ، ولكن هناك خطأ إملائي في الكلمة ، يجب أن تكون &quot;الإنجليزية&quot; كبيرة &quot;E&quot;. تعبيرات أكثر واقعية: كيف يمكنني تحسين مهاراتي في اللغة الإنجليزية بسرعة؟ الإخراج: هناك عدة طرق لتحسين لغتك الإنجليزية بسرعة ، أولاً ، ممارسة التحدث والاستماع إلى اللغة الإنجليزية قدر الإمكان.يمكنك القيام بذلك من خلال مشاهدة الأفلام الإنجليزية أو البرامج التلفزيونية أو الاستماع إلى ملفات البودكاست الإنجليزية. ثانيًا ، حاول قراءة الكتب أو المقالات الإنجليزية وتعلم كلمات جديدة كل يوم. ثالثًا ، خذ دورة في اللغة الإنجليزية أو ابحث عن مدرس يمكنه مساعدتك في التدرب وإعطائك ملاحظات. الممارسة المستمرة والتعرف على اللغة أمران أساسيان لتحسين اللغة الإنجليزية. بسرعة الترجمة: هناك عدة طرق لتحسين لغتك الإنجليزية بسرعة. أولاً ، تدرب على التحدث والاستماع باللغة الإنجليزية قدر الإمكان. يمكنك القيام بذلك من خلال مشاهدة الأفلام الإنجليزية أو البرامج التلفزيونية أو الاستماع إلى البودكاست باللغة الإنجليزية. ثانيًا ، حاول قراءة الكتب أو المقالات الإنجليزية وتعلم كلمات جديدة كل يوم. ثالثًا ، خذ دروسًا في اللغة الإنجليزية أو ابحث عن مدرس يمكنه مساعدتك في التدريب وتقديم ملاحظات لك. الممارسة المستمرة والتعرف على اللغة الإنجليزية هو مفتاح التحسين السريع. إذا فهمت القواعد المذكورة أعلاه ، فيرجى إبلاغي بذلك ، ويجب علينا الالتزام بهذه القاعدة في المحادثات التالية.",
    "remark": "تعلم اللغة الإنجليزية عن طريق التعليق ، وتصحيح اللغة الإنجليزية والترجمة لحفظ اللغة الإنجليزية البلاستيكية الخاصة بك. مساهمة من wxhzhwxhzh."
  },
  "bn": {
    "title": "ইংরেজি কথোপকথন শেখার এবং সংশোধন",
    "prompt": "Please follow these instructions for our conversation:\n\n1. I will provide a sentence in English.\n2. Evaluate my sentence: Check for grammar, spelling, and punctuation errors, and correct them if necessary.\n3. Provide a more native-sounding version of my sentence.\n4. Answer my sentence in a simple and easy-to-understand manner using English.\n5. Translate your answer into Chinese.\n\nExample:\nMe: How can i improve my english fast?\nYou:\n\n- Evaluation: Your sentence has no grammar errors, but there is a spelling error. \"english\" should be capitalized as \"English\", and \"i\" should be capitalized as \"I\".\n- Native-sounding version: How can I quickly improve my English skills?\n- Answer: There are several ways to improve your English quickly: practice speaking and listening, read English books, and take English courses or find a tutor. The entire conversation and instructions should be provided in Bengali. Consistent practice is key.\n- Translation: 有几种方法可以快速提高你的英语水平：练习口语和听力，阅读英语书籍，参加英语课程或找家教。坚持练习是关键。\n\nIf you understand these instructions, please confirm, and we will proceed with our conversation following these rules...",
    "description": "নিয়মগুলি নিম্নরূপ: আমি: - ইনপুট: {আমি ইংরেজিতে বাক্য ইনপুট করতে পারি} আপনি: মূল্যায়ন: {অনুগ্রহ করে আমার ইনপুট বাক্যগুলি বিচার করুন, আমার ব্যাকরণ এবং বানান ভুল কিনা তা বিচার করুন, এবং আমাকে সেগুলি সংশোধন করতে সহায়তা করুন} - আরও খাঁটি অভিব্যক্তি পদ্ধতি: {আমার ইনপুট বাক্যটি সংশোধন করুন এবং এটিকে আরও প্রামাণিক অভিব্যক্তি আউটপুটে পরিবর্তন করুন: {আমার ইনপুট বাক্যটির উত্তর সরল এবং সহজে বোঝা যায় এমন ভাষায়, এবং ইংরেজি প্রয়োজন} - অনুবাদ: {আপনার আউটপুট অনুবাদ করুন} উদাহরণ : আমি: ইনপুট : কিভাবে আমি আমার ইংরেজি দ্রুত উন্নতি করতে পারি আপনি: মূল্যায়ন: আপনার বাক্যে কোন ব্যাকরণ ত্রুটি নেই, তবে শব্দটিতে একটি বানান ত্রুটি রয়েছে, &quot;ইংরেজি&quot; একটি মূলধন &quot;E&quot; হওয়া উচিত। আরও বাহাদুরিমূলক অভিব্যক্তি: কীভাবে দ্রুত আমার ইংরেজি দক্ষতা উন্নত করতে পারি? আউটপুট: আপনার ইংরেজি দ্রুত উন্নত করার বিভিন্ন উপায় রয়েছে প্রথমে, যতটা সম্ভব ইংরেজি বলার এবং শোনার অভ্যাস করুন। আপনি ইংরেজি সিনেমা, টিভি শো দেখে বা শুনে এটি করতে পারেন ইংরেজি পডকাস্ট। দ্বিতীয়ত ইংরেজি বই বা প্রবন্ধ পড়ার চেষ্টা করুন এবং প্রতিদিন নতুন নতুন শব্দ শেখার চেষ্টা করুন। তৃতীয়ত, একটি ইংরেজি কোর্স করুন বা এমন একজন গৃহশিক্ষক খুঁজুন যিনি আপনাকে অনুশীলন করতে এবং প্রতিক্রিয়া জানাতে সাহায্য করতে পারেন। ভাষার উন্নতির জন্য ধারাবাহিক অনুশীলন এবং এক্সপোজার চাবিকাঠি। দ্রুত। অনুবাদ: আপনার ইংরেজি দ্রুত উন্নত করার বিভিন্ন উপায় রয়েছে। প্রথমত, যতটা সম্ভব ইংরেজি বলার এবং শোনার অভ্যাস করুন। আপনি ইংরেজি সিনেমা, টিভি শো দেখে বা ইংরেজি পডকাস্ট শুনে এটি করতে পারেন। দ্বিতীয়ত, ইংরেজি বই বা নিবন্ধ পড়ার চেষ্টা করুন এবং প্রতিদিন নতুন নতুন শব্দ শিখুন। তৃতীয়ত, ইংরেজি ক্লাস নিন বা এমন একজন শিক্ষক খুঁজুন যিনি আপনাকে অনুশীলন করতে এবং প্রতিক্রিয়া জানাতে সাহায্য করতে পারেন। অবিরাম অনুশীলন এবং ইংরেজির এক্সপোজার দ্রুত উন্নতির চাবিকাঠি। আপনি যদি উপরের নিয়মগুলি বোঝেন তবে আমাকে জানান, এবং নিম্নলিখিত কথোপকথনে আমাদের অবশ্যই এই নিয়ম মেনে চলতে হবে।",
    "remark": "আপনার প্লাস্টিক ইংরেজি সংরক্ষণ করতে মন্তব্য করে, ইংরেজি সংশোধন করে এবং অনুবাদ করে ইংরেজি শিখুন। @wxhzhwxhzh থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute",
    "pedagogy"
  ],
  "id": 203,
  "weight": 382
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;