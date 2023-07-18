import React from "react";
import PromptPage from "../_components/PromptPage";

const prompt = {
  "zh": {
    "title": "论文期刊匹配",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"",
    "description": "我希望你能充当科学手稿的匹配者。我将分别向您提供我的科学手稿的标题、摘要和关键词。你的任务是综合分析我的标题、摘要和关键词，根据对数据库中数以千万计的引文连接的分析，如 Web of Science、Pubmed、Scopus、ScienceDirect 等，为我的研究找到最相关、最有信誉的期刊。你只需向我提供 15 种最合适的期刊。你的回复应该包括期刊名称，对应的匹配分数（满分是 10 分）。我希望你在基于文本的 excel 表格中进行回复，并按匹配分数倒序排序。",
    "remark": "来自 @ScenerorSun 的投稿，引用自 B 站@洋芋锅巴。"
  },
  "en": {
    "title": "Journal Match",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"",
    "remark": "Contributed by @ScenerorSun, quoted from Bilibili (@洋芋锅巴)."
  },
  "ja": {
    "title": "論文誌のマッチング",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Janpanese. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "科学原稿のマッチング役をお願いしたいです。私の科学原稿のタイトル、アブストラクト、キーワードをそれぞれ提供します。あなたの仕事は、私のタイトル、アブストラクト、キーワードを総合して、Web of Science、Pubmed、Scopus、ScienceDirect などのデータベースにある数千万件の引用リンクの分析に基づいて、私の研究に最も関連し評判の良いジャーナルを見つけることです。あなたは、最も適切なジャーナルのうち 15 誌を私に提供する必要があるだけです。回答には、ジャーナル名とそれに対応するマッチングスコア（10 点満点）を含める必要があります。テキストベースのエクセル・スプレッドシートで、マッチ・スコアによって逆順にソートして回答してほしい。",
    "remark": "B サイト@Yam Potpourri より引用、@ScenerorSun より寄稿。"
  },
  "ko": {
    "title": "논문 저널 매칭",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Korean. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "과학 원고의 매칭 역할을 해 주셨으면 합니다. 저는 제 과학 원고의 제목, 초록, 키워드를 각각 제공할 것입니다. 귀하의 임무는 제목, 초록, 키워드를 종합하고 Web of Science, Pubmed, Scopus, ScienceDirect 등의 데이터베이스에 있는 수천만 개의 인용 링크를 분석하여 제 연구와 가장 관련성이 높고 평판이 좋은 저널을 찾는 것입니다. 가장 적합한 학술지 15 개만 제공하면 됩니다. 답변에는 저널 이름과 해당 일치 점수 (10 점 만점) 가 포함되어야 합니다. 일치 점수 역순으로 정렬된 텍스트 기반 엑셀 스프레드시트로 답변해 주시기 바랍니다.",
    "remark": "ScenerorSun 의 기여, B 사이트 @얌 포푸리에서 인용."
  },
  "es": {
    "title": "Correspondencia de diarios",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Spanish. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\".",
    "description": "Me gustaría que actuaran como intermediarios para manuscritos científicos. Le proporcionaré por separado el título, el resumen y las palabras clave de mi manuscrito científico. Su tarea consiste en sintetizar mi título, resumen y palabras clave para encontrar las revistas más relevantes y reputadas para mi investigación a partir del análisis de decenas de millones de enlaces de citas en bases de datos, como Web of Science, Pubmed, Scopus, ScienceDirect, etcétera. Todo lo que tiene que hacer es proporcionarme las 15 revistas más apropiadas. Su respuesta debe incluir el nombre de la revista y la correspondiente puntuación de coincidencia sobre 10. Me gustaría que me respondiera en una hoja de cálculo Excel basada en texto, ordenada en orden inverso por puntuación de coincidencia.",
    "remark": "Contribución de @ScenerorSun, citado en el sitio B @Yams Potpourri."
  },
  "fr": {
    "title": "Correspondance des journaux",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in French. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "J'aimerais que vous jouiez le rôle d'entremetteur pour les manuscrits scientifiques. Je vous fournirai séparément le titre, le résumé et les mots-clés de mon manuscrit scientifique. Votre tâche consiste à synthétiser mon titre, mon résumé et mes mots-clés afin de trouver les revues les plus pertinentes et les plus réputées pour mes recherches, sur la base de l'analyse de dizaines de millions de liens de citation dans des bases de données telles que Web of Science, Pubmed, Scopus, ScienceDirect, etc. Tout ce que vous avez à faire, c'est de me fournir les 15 revues les plus appropriées. Votre réponse doit inclure le nom de la revue, le score correspondant sur 10. J'aimerais que vous répondiez dans une feuille de calcul Excel à base de texte, triée dans l'ordre inverse par score de correspondance.",
    "remark": "Contribution de @ScenerorSun, cité sur le site B @Yams Potpourri."
  },
  "de": {
    "title": "Journal-Abgleich",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in German. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "Ich möchte, dass Sie als Vermittler für wissenschaftliche Manuskripte fungieren. Ich werde Ihnen den Titel, die Zusammenfassung und die Schlüsselwörter meines wissenschaftlichen Manuskripts separat zur Verfügung stellen. Ihre Aufgabe ist es, meinen Titel, die Zusammenfassung und die Schlüsselwörter zusammenzufassen, um die relevantesten und seriösesten Zeitschriften für meine Forschung zu finden, basierend auf der Analyse von Millionen von Zitationslinks in Datenbanken wie Web of Science, Pubmed, Scopus, ScienceDirect usw. Alles, was Sie tun müssen, ist, mir die 15 am besten geeigneten Zeitschriften zu nennen. Ihre Antwort sollte den Namen der Zeitschrift und die entsprechende Trefferquote von 10 enthalten. Ich möchte, dass Sie in einer textbasierten Excel-Tabelle antworten, die in umgekehrter Reihenfolge nach der Trefferquote sortiert ist.",
    "remark": "Beigetragen von @ScenerorSun, zitiert auf Seite B @Yams Potpourri."
  },
  "it": {
    "title": "Corrispondenza dei diari",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Italian. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "Vorrei che lei agisse da matchmaker per i manoscritti scientifici. Vi fornirò separatamente il titolo, l'abstract e le parole chiave del mio manoscritto scientifico. Il vostro compito è quello di sintetizzare il titolo, l'abstract e le parole chiave per trovare le riviste più pertinenti e affidabili per la mia ricerca, basandovi sull'analisi di decine di milioni di collegamenti citazionali in banche dati come Web of Science, Pubmed, Scopus, ScienceDirect e così via. Tutto ciò che dovete fare è fornirmi le 15 riviste più appropriate. La vostra risposta deve includere il nome della rivista e il corrispondente punteggio di corrispondenza su 10. Vorrei che rispondeste in un foglio excel basato sul testo, ordinato in ordine inverso in base al punteggio.",
    "remark": "Contribuito da @ScenerorSun, citato sul sito B @Yams Potpourri."
  },
  "ru": {
    "title": "Сопоставление журналов",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Russian. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "Я хотел бы, чтобы Вы выступили в роли свахи для научных рукописей. Я предоставлю Вам отдельно название, аннотацию и ключевые слова моей научной рукописи. Ваша задача - синтезировать название, аннотацию и ключевые слова и найти наиболее релевантные и авторитетные журналы для моего исследования на основе анализа десятков миллионов ссылок на цитаты в базах данных, таких как Web of Science, Pubmed, Scopus, ScienceDirect и др. Все, что вам нужно сделать, - это предоставить мне 15 наиболее подходящих журналов. Ваш ответ должен включать название журнала и соответствующий балл соответствия из 10. Я хотел бы, чтобы Вы представили свой ответ в виде текстовой электронной таблицы excel, отсортированной в обратном порядке по баллам соответствия.",
    "remark": "Внесено @ScenerorSun, цитируется по сайту B @Yams Potpourri."
  },
  "pt": {
    "title": "Correspondência de diários",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Portuguese. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "Gostaria que actuasse como \"matchmaker\" de manuscritos científicos. Fornecer-lhe-ei separadamente o título, o resumo e as palavras-chave do meu artigo científico. A sua tarefa é sintetizar o meu título, resumo e palavras-chave para encontrar as revistas mais relevantes e reputadas para a minha investigação, com base na análise de dezenas de milhões de ligações de citações em bases de dados, tais como Web of Science, Pubmed, Scopus, ScienceDirect, etc. Tudo o que precisa de fazer é fornecer-me as 15 revistas mais adequadas. A sua resposta deve incluir o nome do periódico e a pontuação de correspondência correspondente numa escala de 10. Gostaria que respondesse numa folha de cálculo Excel baseada em texto, ordenada por ordem inversa da pontuação.",
    "remark": "Contribuição de @ScenerorSun, citada no sítio B @Yams Potpourri."
  },
  "hi": {
    "title": "पेपर जर्नल मिलान",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Hindi. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "मैं चाहूंगा कि आप वैज्ञानिक पांडुलिपियों के मिलानकर्ता के रूप में कार्य करें। मैं आपको अपनी वैज्ञानिक पांडुलिपि का शीर्षक, सार और कीवर्ड अलग से उपलब्ध कराऊंगा। आपका काम मेरे शीर्षक, सार और कीवर्ड का व्यापक विश्लेषण करना है, और सबसे अधिक प्रासंगिक, सबसे प्रतिष्ठित पत्रिकाएं ढूंढना है। आपको बस मुझे 15 सबसे उपयुक्त पत्रिकाएँ प्रदान करनी होंगी। आपकी प्रतिक्रिया में जर्नल का नाम और संबंधित मैच स्कोर (10 में से) शामिल होना चाहिए। मैं चाहता हूं कि आप मिलान स्कोर के अनुसार उल्टे क्रम में क्रमबद्ध टेक्स्ट-आधारित एक्सेल शीट में उत्तर दें।",
    "remark": "@ScenerorSun का योगदान, स्टेशन B @沙蜜粥巴 से उद्धृत।"
  },
  "ar": {
    "title": "مطابقة المجلات الورقية",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Arabic. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "أود منك أن تعمل كمطابق للمخطوطات العلمية. سأقدم لك العنوان والملخص والكلمات الرئيسية لمخطوطتي العلمية بشكل منفصل. مهمتك هي تحليل العنوان والملخص والكلمات الرئيسية الخاصة بي بشكل شامل ، والعثور على المجلات الأكثر صلة والأكثر شهرة. كل ما تحتاجه هو أن تزودني بأكثر 15 مجلة مناسبة. يجب أن يتضمن ردك اسم المجلة ودرجة المباراة المقابلة (من 10). أريدك أن ترد في ورقة إكسل نصية مرتبة حسب نتيجة المباراة بترتيب عكسي.",
    "remark": "مساهمة منScenerorSun ، مقتبسة من المحطة B @ 沙 蜜 粥 巴。"
  },
  "bn": {
    "title": "কাগজ জার্নাল ম্যাচিং",
    "prompt": "I want you to act as a scientific manuscript matcher. I will provide you with the title, abstract and key words of my scientific manuscript, respectively. Your task is analyzing my title, abstract and key words synthetically to find the most related, reputable journals for potential publication of my research based on an analysis of tens of millions of citation connections in database, such as Web of Science, Pubmed, Scopus, ScienceDirect and so on. You only need to provide me with the 15 most suitable journals. Your reply should include the name of journal, the cooresponding match score (The full score is ten). The entire conversation and instructions should be provided in Bengali. I want you to reply in text-based excel sheet and sort by matching scores in reverse order.\nMy title is \"XXX\" My abstract is \"XXX\" My key words are \"XXX\"..",
    "description": "আমি চাই আপনি বৈজ্ঞানিক পান্ডুলিপির জন্য একজন ম্যাচার হিসাবে কাজ করুন। আমি আপনাকে আলাদাভাবে আমার বৈজ্ঞানিক পাণ্ডুলিপির শিরোনাম, বিমূর্ত এবং কীওয়ার্ড প্রদান করব। আপনার কাজ হল আমার শিরোনাম, বিমূর্ত এবং কীওয়ার্ডগুলি ব্যাপকভাবে বিশ্লেষণ করা এবং সবচেয়ে প্রাসঙ্গিক, সবচেয়ে সম্মানিত জার্নালগুলি খুঁজে বের করা৷ আপনাকে শুধু আমাকে 15টি সবচেয়ে উপযুক্ত জার্নাল দিতে হবে। আপনার প্রতিক্রিয়ায় জার্নালের নাম এবং সংশ্লিষ্ট ম্যাচ স্কোর (10টির মধ্যে) অন্তর্ভুক্ত করা উচিত। আমি চাই আপনি বিপরীত ক্রমে ম্যাচ স্কোর অনুসারে সাজানো একটি পাঠ্য-ভিত্তিক এক্সেল শীটে প্রতিক্রিয়া জানান।",
    "remark": "@ScenerorSun থেকে অবদান, স্টেশন B @沙蜜粥巴 থেকে উদ্ধৃত।"
  },
  "website": null,
  "tags": [
    "contribute",
    "write"
  ],
  "id": 259,
  "weight": 292
};

function PromptDetail() {
  return <PromptPage prompt={prompt} />;
}

export default PromptDetail;
