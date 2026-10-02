(() => {
  'use strict';
  const root = document.documentElement;
  const themeControl = document.querySelector('#themeSelect');
  const localeControl = document.querySelector('#localeToggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let locale = root.lang === 'ar' ? 'ar' : 'en';
  const translations = {
    'System':'النظام', 'Light':'فاتح', 'Dark':'داكن', 'Color theme':'مظهر الموقع',
    'Work':'أعمالي','About':'عني','Play':'العب','Let’s talk':'لنتحدث',
    'Karem Ehab home':'كريم إيهاب — الرئيسية','Main navigation':'القائمة الرئيسية',
    'Loading portfolio':'جارٍ تحميل الموقع','Loading artwork':'جارٍ تحميل الصورة','Loading…':'جارٍ التحميل…',
    'UI/UX DESIGNER · ALEXANDRIA, EGYPT':'مصمم واجهات وتجربة مستخدم · الإسكندرية، مصر',
    'PORTFOLIO / 2026':'معرض أعمال / ٢٠٢٦','Good design.':'تصميم جميل.','Great':'وإحساس','feeling.':'أجمل.',
    'I’m Karem. I design simple experiences with a playful edge.':'أنا كريم. أصمم تجارب بسيطة بروح مرحة.',
    'Explore my work':'شاهد أعمالي','A little joy':'لحظة مرح','DESIGN WITH FEELING':'تصميم بروح','SCROLL TO EXPLORE ↓':'مرّر لتكتشف ↓',
    'LESS FRICTION':'بساطة أكثر','MORE FEELING':'إحساس أجمل','CLEAR THINKING':'تفكير واضح','BOLD IDEAS':'أفكار جريئة',
    '01 / SELECTED EXPLORATIONS':'٠١ / أعمال مختارة','Selected work.':'أعمال مختارة.','A playful perspective.':'بنظرة مرحة.',
    'FINTECH / MOBILE':'التقنية المالية / تطبيق','Your money, at a glance':'أموالك في لمحة','Send +':'إرسال +','Add money':'إضافة رصيد',
    'Everyday spending':'المصروفات اليومية','See all':'عرض الكل','☕ Coffee break':'☕ وقت القهوة','↗ Monthly income':'↗ الدخل الشهري',
    'A calmer way to money.':'راحة أكثر مع أموالك.','Everyday finance, simplified':'أموالك اليومية ببساطة',
    'UX Strategy':'استراتيجية التجربة','Product Design':'تصميم المنتج','Concept':'تصور',
    'FOOD & LIFESTYLE / MOBILE':'الطعام ونمط الحياة / تطبيق','Good food.':'طعام لذيذ.','Zero fuss':'بلا تعقيد',
    'Menu ☰':'القائمة ☰','YOUR LUNCH BREAK, UPGRADED':'استراحة غداء أجمل','What sounds':'ماذا تشتهي','good today?':'اليوم؟',
    'All picks':'الكل','Quick bites':'وجبات سريعة','Coffee':'قهوة','The lunch club':'وقت الغداء',
    'Fresh picks. Ready when you are.':'خيارات طازجة. جاهزة لك.','Explore the menu +':'اكتشف القائمة +','less wait.':'انتظار أقل.','more taste.':'مذاق أجمل.',
    'Good food, ready for pickup':'طعام لذيذ، جاهز للاستلام','User Journeys':'رحلات المستخدم','UI Design':'تصميم الواجهات',
    'WORKSPACE / WEB APP':'مساحة عمل / ويب','A little more flow.':'تركيز أكثر.','A lot less chaos.':'وفوضى أقل.',
    'FORMA / THE FOCUS WORKSPACE':'فورما / مساحة للتركيز','◉ Overview':'◉ نظرة عامة','▦ Projects':'▦ المشاريع','◷ My tasks':'◷ مهامي','✧ Notes':'▱ ملاحظات',
    'Your space, in sync.':'مساحة عملك، بتناغم.','Make room for your best work.':'مساحة لأفضل أعمالك.',
    '6.5h':'٦٫٥ س','In progress':'قيد التنفيذ','Completed':'مكتمل','Focus time':'وقت التركيز','Website exploration':'تصور الموقع',
    'Design system':'نظام التصميم','In review':'قيد المراجعة','Mobile onboarding':'تهيئة التطبيق','Room for focused work':'مساحة للعمل بتركيز',
    'Interaction Design':'تصميم التفاعل','Design Systems':'أنظمة التصميم',
    '02 / ABOUT ME':'٠٢ / عني','Curious by nature.':'فضولي بطبعي.','Designer by choice.':'مصمم باختياري.',
    'Karem Ehab':'كريم إيهاب','Make it clear. Make it feel right.':'وضوح في الفكرة. وجمال في الإحساس.',
    'Based in Alexandria. Working across UI/UX, Figma, and Flutter.':'من الإسكندرية. أعمل في تصميم الواجهات وتجربة المستخدم باستخدام فيجما وفلاتر.',
    'UI/UX Design':'تصميم الواجهات والتجربة','Figma':'فيجما','Prototyping':'نماذج تفاعلية','Flutter':'فلاتر','Visual Storytelling':'السرد البصري',
    '03 / MY PROCESS':'٠٣ / أسلوبي','Thought before pixels.':'الفكرة قبل التفاصيل.','Listen & discover':'اسمع واكتشف',
    'Understand people. Find the real problem.':'افهم الناس. وحدد المشكلة الحقيقية.','Explore & simplify':'استكشف وبسّط',
    'Map the journey. Keep what matters.':'ارسم الرحلة. واحتفظ بما يهم.','Make & refine':'صمّم وحسّن','Prototype. Test. Refine.':'جرّب. اختبر. حسّن.',
    '04 / PLAY BREAK':'٠٤ / استراحة لعب','Less serious.':'جدية أقل.','More curious.':'فضول أكثر.',
    'Match shapes. Hunt colors. Make a little time to play.':'طابق الأشكال. اكتشف الألوان. خذ لحظة للعب.',
    'Choose playground accent':'اختر لون البطاقة','Cobalt blue':'أزرق','Lime':'أخضر ليموني','Coral':'مرجاني','Lilac':'بنفسجي',
    'Remix the layout ↻':'غيّر الترتيب ↻','DESIGN PLAYGROUND':'مساحة للإبداع','A GOOD DAY TO CREATE':'يوم جميل للإبداع',
    'Make':'اترك','your mark.':'بصمتك.','Stay':'حافظ على','curious.':'فضولك.','Find':'اكتشف','your flow.':'إيقاعك.','Ideas start here.':'هنا تبدأ الأفكار.',
    'PIXEL PAIRS':'أزواج الأشكال','COLOR HUNT':'صيد الألوان','Good eyes. Great matches.':'نظرة ذكية. تطابق أجمل.',
    'Flip two tiles. Find six pairs.':'اقلب بطاقتين. اعثر على ستة أزواج.','moves':'محاولات','picks':'اختيارات','/ 6 pairs':'/ ٦ أزواج','/ 8 colors':'/ ٨ ألوان',
    'Best:':'الأفضل:','New round':'جولة جديدة','Color Hunt':'صيد الألوان','Color Hunt ◈':'صيد الألوان ◈','Pixel Pairs ◎':'أزواج الأشكال ◎',
    'Find your first pair.':'اعثر على أول زوج.','Find its matching tile.':'اعثر على البطاقة المطابقة.','Different shapes. Remember their places.':'شكلان مختلفان. تذكّر مكانهما.',
    'Try another pair.':'جرّب زوجًا آخر.','Ready when you are. Try another pair.':'جاهز عندما تكون مستعدًا. جرّب زوجًا آخر.',
    'One shade stands out.':'درجة لون مختلفة.','Find the lighter tile. Eight hunts, each a little harder.':'اعثر على المربع الأفتح. ثماني جولات تزداد صعوبة.',
    'Hunt 1 of 8: find the lighter tile. No timer, take your time.':'الجولة ١ من ٨: اعثر على المربع الأفتح. خذ وقتك، بلا مؤقّت.',
    'That shade matches the others. Look for the lighter tile.':'هذه الدرجة تشبه البقية. ابحث عن المربع الأفتح.',
    'Pixel Pairs matching tiles':'لعبة مطابقة الأشكال','Color Hunt: find the lighter tile':'صيد الألوان: اعثر على المربع الأفتح',
    '05 / WHAT’S NEXT?':'٠٥ / ماذا بعد؟','Let’s make':'لنصنع','something great.':'شيئًا رائعًا.','Write a brief':'اكتب فكرة مشروعك',
    'Have something in mind?':'هل لديك فكرة؟','ALEXANDRIA, EGYPT · WORKING EVERYWHERE':'الإسكندرية، مصر · أعمل من أي مكان','Back to top ↑':'إلى الأعلى ↑',
    'Close case study':'إغلاق دراسة المشروع','Close project brief':'إغلاق نموذج المشروع','LET’S START WITH AN IDEA':'لنبدأ بفكرة',
    'What’s your idea?':'ما فكرتك؟','Write a brief to download and share.':'اكتب فكرة مشروعك لتنزيلها ومشاركتها.',
    'Your name':'اسمك','Email':'البريد الإلكتروني','Tell me about the project':'حدثني عن مشروعك',
    'How should I call you?':'ما اسمك؟','The idea, the challenge, and what you want to achieve…':'الفكرة، والتحدي، وما تريد تحقيقه…',
    'Download my brief':'تنزيل فكرة المشروع','Your brief stays on your device. This form doesn’t send a message.':'يبقى الملف على جهازك. هذا النموذج لا يرسل رسالة.',
    'Your brief is ready to share.':'ملف مشروعك جاهز للمشاركة.','A little joy goes a long way.':'لحظة مرح تصنع فرقًا.',
    'The question':'السؤال','The approach':'الأسلوب','Design decisions':'قرارات التصميم','What I’d validate next':'ما سأختبره لاحقًا',
    'FINTECH · PRODUCT CONCEPT':'التقنية المالية · تصور منتج','FOOD & LIFESTYLE · PRODUCT CONCEPT':'الطعام ونمط الحياة · تصور منتج','WORKSPACE · WEB APP CONCEPT':'مساحة عمل · تصور تطبيق ويب',
    'A calmer way to manage everyday money.':'طريقة أهدأ لإدارة أموالك اليومية.',
    'Turning a hungry moment into a simple pickup journey.':'من اختيار وجبتك إلى استلامها ببساطة.',
    'A workspace that makes room for focused creative work.':'مساحة عمل تتيح لك التركيز والإبداع.',
    'Playful cobalt blue sculptural loop with a lime sphere':'حلقة زرقاء ثلاثية الأبعاد مع كرة خضراء'
  };
  Object.assign(translations, {"Make balances and daily spending easier to understand.": "اجعل الرصيد والمصروفات اليومية أوضح.", "Prioritize balance, recent activity, and common actions.": "ضع الرصيد، وآخر العمليات، والإجراءات الشائعة أولًا.", "A clear hierarchy, compact chart, and room to breathe.": "تسلسل واضح، ورسم موجز، ومساحات مريحة.", "Test navigation, accessibility, and account switching.": "اختبر التنقل، وإمكانية الوصول، والتبديل بين الحسابات.", "Help people choose quickly and know when their food is ready.": "ساعد الناس على الاختيار بسرعة ومعرفة موعد جاهزية الطعام.", "Connect discovery, ordering, and pickup in one clear journey.": "اربط الاكتشاف والطلب والاستلام في رحلة واضحة.", "Focused categories, transparent prices, and visible order status.": "فئات محددة، وأسعار واضحة، وحالة طلب ظاهرة.", "Test menu discovery and pickup expectations.": "اختبر اكتشاف الوجبات وتوقعات الاستلام.", "Keep projects and tasks clear as work grows.": "حافظ على وضوح المشاريع والمهام مع نمو العمل.", "Separate navigation from daily priorities.": "افصل التنقل عن الأولويات اليومية.", "Consistent components, quiet colors, and useful summaries.": "مكونات متناسقة، وألوان هادئة، وملخصات مفيدة.", "Test realistic workloads, keyboard controls, and mobile layouts.": "اختبر المهام الواقعية، ولوحة المفاتيح، وشاشات الهاتف.", "COLOR HUNT / A TINY DESIGN BREAK": "صيد الألوان", "PIXEL PAIRS / A TINY DESIGN BREAK": "أزواج الأشكال"});
  Object.assign(translations, {
    'Open menu':'فتح القائمة','Close menu':'إغلاق القائمة','Make yourself at home.':'الموقع على ذوقك.',
    'Appearance':'المظهر','Language':'اللغة','05 / LET’S CREATE':'٠٥ / لنبدع',
    'Your next':'فكرتك','good idea.':'القادمة.', 'Let’s give it a little life.':'لنمنحها شيئًا من الحياة.',
    'A little movement. A new perspective.':'حركة بسيطة. ونظرة جديدة.'
  });
  Object.assign(translations, {
    'UI/UX Designer':'مصمم واجهات وتجربة مستخدم','Have a good idea?':'لديك فكرة جميلة؟','Explore':'اكتشف',
    'What I do':'ما أقدمه','From here, everywhere.':'من هنا إلى كل مكان.','Alexandria, Egypt':'الإسكندرية، مصر',
    'Working worldwide':'أعمل من أي مكان','Made with curiosity.':'صُنع بروح فضولية.',
    'Illustrated Mediterranean bay with a seaside city, distant hills, and coastal greenery':'رسم لخليج متوسطي ومدينة ساحلية وتلال بعيدة ونباتات خضراء'
  });
  Object.assign(translations, {
    'Project type':'نوع المشروع','Choose a project type':'اختر نوع المشروع','App':'تطبيق','Website':'موقع إلكتروني',
    'Send by email':'أرسل بالبريد الإلكتروني','Send on WhatsApp':'أرسل عبر واتساب'
  });
  Object.assign(translations, {
    'Score':'النتيجة','Best':'الأفضل','Restart game':'إعادة اللعبة','points':'نقاط','High score:':'أعلى نتيجة:','New game':'لعبة جديدة','lives':'فرص',
    'Find six pairs. +100 per match, −10 per miss.':'اعثر على ستة أزواج. +١٠٠ للتطابق، −١٠ للخطأ.',
    'Find the lighter tile. +100 points, streak bonuses, 3 lives.':'اعثر على المربع الأفتح. +١٠٠ نقطة ومكافآت للتتابع، و٣ فرص.',
    'Find the lighter tile. Keep playing while you have lives.':'اعثر على المربع الأفتح. واصل اللعب ما دامت لديك فرص.',
    'Alexandria panorama with Qaitbay Citadel and Bibliotheca Alexandrina':'مشهد للإسكندرية يضم قلعة قايتباي ومكتبة الإسكندرية'
  });
  Object.assign(translations, {
    'UI/UX design with a playful edge.':'تصميم واجهات وتجربة مستخدم بروح مرحة.',
    'From Alexandria.':'من الإسكندرية.', 'Designing digital experiences.':'أصمم تجارب رقمية.',
    'A little play.':'لحظة مرح.', 'Match shapes. Hunt colors.':'طابق الأشكال. اكتشف الألوان.',
    '03 / THE DETAILS':'٠٣ / التفاصيل', 'Designed to feel easy.':'تصميم يريحك.',
    'Clarity':'وضوح', 'Less to decode.':'كل شيء واضح.', 'Flow':'انسيابية',
    'Fewer steps.':'خطوات أقل.', 'Delight':'بهجة', 'A little personality.':'لمسة من الشخصية.'
  });
  Object.assign(translations, {
    '02 / ABOUT':'٠٢ / عني','Design mind.':'عقلية تصميم.','Business thinking.':'وتفكير أعمال.',
    'I connect clear product thinking with playful, usable interfaces.':'أجمع بين وضوح التفكير في المنتج وواجهات عملية بروح مرحة.',
    'Education':'التعليم','Bachelor of Business Administration':'بكالوريوس إدارة الأعمال',
    'Management Information Systems · Alexandria University':'نظم معلومات إدارية · جامعة الإسكندرية',
    'Skills':'المهارات','Design':'التصميم','Tools':'الأدوات','Build':'التنفيذ',
    'Product Design':'تصميم المنتجات','Adobe Creative Suite':'حزمة أدوبي الإبداعية','Front-end collaboration':'التعاون مع مطوري الواجهات',
    'Blender':'بلندر','Alexandria, Egypt':'الإسكندرية، مصر',
    'Year':'السنة','Role':'الدور','Platform':'المنصة','Scope':'النطاق','Product design':'تصميم المنتج','Mobile':'الهاتف','Responsive web':'ويب متجاوب',
    'Fintech concept':'تصور تقنية مالية','Food pickup concept':'تصور طلب واستلام الطعام','Workspace concept':'تصور مساحة عمل','UI/UX design':'تصميم الواجهات والتجربة',
    'Keep exploring':'واصل الاستكشاف','01 / CHALLENGE':'٠١ / التحدي','02 / APPROACH':'٠٢ / الأسلوب','03 / DESIGN DECISIONS':'٠٣ / قرارات التصميم','04 / OUTCOME':'٠٤ / النتيجة',
    'A calmer way to understand everyday money.':'طريقة أهدأ لفهم أموالك اليومية.',
    'Make the next decision obvious.':'اجعل القرار التالي واضحًا.',
    'Balances, spending, and common actions often compete for attention. The experience needed a calmer hierarchy that could answer the most important questions at a glance.':'غالبًا ما تتنافس الأرصدة والمصروفات والإجراءات الشائعة على الانتباه. احتاجت التجربة إلى تسلسل أهدأ يجيب عن أهم الأسئلة من أول نظرة.',
    'Start with what matters today.':'ابدأ بما يهم اليوم.',
    'I centered the home screen on the current balance, recent activity, and the actions people use most—then reduced everything else to quiet supporting detail.':'ركّزت الشاشة الرئيسية على الرصيد الحالي وآخر العمليات والإجراءات الأكثر استخدامًا، ثم جعلت باقي التفاصيل داعمة وهادئة.',
    'Clarity without feeling clinical.':'وضوح بلا جمود.',
    'A compact spending visual, generous spacing, and one strong action color create rhythm while keeping financial information easy to scan.':'رسم موجز للمصروفات ومساحات مريحة ولون واحد للإجراءات تصنع إيقاعًا واضحًا وتجعل المعلومات المالية سهلة القراءة.',
    'Clear financial hierarchy':'تسلسل مالي واضح','Fast common actions':'إجراءات شائعة سريعة','Accessible data contrast':'تباين واضح للبيانات',
    'A focused finance concept.':'تصور مالي أكثر تركيزًا.','The result is a mobile direction that keeps essential information readable, reassuring, and ready for realistic usability testing.':'النتيجة اتجاه لتطبيق هاتف يحافظ على وضوح المعلومات الأساسية وطمأنينتها، وجاهز لاختبارات استخدام واقعية.',
    'Next: validate navigation, accessibility, and account switching with task-based testing.':'التالي: اختبار التنقل وإمكانية الوصول والتبديل بين الحسابات عبر مهام واقعية.',
    'Good food, from discovery to pickup without the wait.':'طعام لذيذ، من الاكتشاف إلى الاستلام بلا انتظار.',
    'Make a hungry moment feel simple.':'اجعل لحظة الجوع بسيطة.','People need to choose quickly, understand what they are ordering, and know exactly when it will be ready. The flow had to remove doubt without losing appetite appeal.':'يحتاج الناس إلى الاختيار بسرعة وفهم طلبهم ومعرفة موعد جاهزيته بدقة. كان على المسار إزالة التردد من دون فقدان جاذبية الطعام.',
    'One continuous pickup journey.':'رحلة استلام واحدة متصلة.','Discovery, ordering, and pickup status share the same visual language so the experience feels connected from the first choice to the final handoff.':'يشترك الاستكشاف والطلب وحالة الاستلام في لغة بصرية واحدة، لتبقى التجربة مترابطة من أول اختيار حتى الاستلام.',
    'Warm, useful, and easy to scan.':'دافئ وعملي وسهل القراءة.','Focused categories, transparent pricing, and prominent pickup timing keep the interface lively while protecting the task.':'فئات مركزة وأسعار واضحة ووقت استلام بارز تحافظ على حيوية الواجهة ووضوح المهمة.',
    'Visual menu discovery':'اكتشاف بصري للقائمة','Visible order status':'حالة طلب واضحة','Friendly confirmation states':'حالات تأكيد ودودة',
    'Less waiting. More confidence.':'انتظار أقل. وثقة أكبر.','The concept turns an everyday lunch decision into a compact flow with clear progress and a more memorable personality.':'يحوّل التصور قرار الغداء اليومي إلى مسار موجز بتقدم واضح وشخصية لا تُنسى.',
    'Next: test menu discovery, dietary information, and pickup expectations.':'التالي: اختبار اكتشاف القائمة والمعلومات الغذائية وتوقعات الاستلام.',
    'Keep growing work understandable.':'حافظ على وضوح العمل مع نموه.','As projects, notes, and tasks grow, the interface can become the distraction. Forma needed to make priorities visible without turning the dashboard into a wall of widgets.':'مع نمو المشاريع والملاحظات والمهام، قد تصبح الواجهة نفسها مصدر تشتيت. احتاجت فورما إلى إبراز الأولويات من دون تحويل اللوحة إلى جدار من العناصر.',
    'Separate navigation from attention.':'افصل التنقل عن الانتباه.','Persistent navigation holds the workspace structure while the main canvas stays focused on today’s priorities, progress, and next actions.':'يحفظ التنقل الثابت هيكل مساحة العمل، بينما تركز المساحة الرئيسية على أولويات اليوم والتقدم والخطوات التالية.',
    'A quiet system with useful signals.':'نظام هادئ بإشارات مفيدة.','Consistent components, calm colors, and concise summaries help people orient themselves quickly across screen sizes.':'مكونات متناسقة وألوان هادئة وملخصات موجزة تساعد المستخدم على فهم مكانه بسرعة على مختلف الشاشات.',
    'Consistent components':'مكونات متناسقة','Responsive hierarchy':'تسلسل متجاوب','Keyboard-ready patterns':'أنماط جاهزة للوحة المفاتيح',
    'More room for the work itself.':'مساحة أكبر للعمل نفسه.','The direction demonstrates how a structured design system can support complex work while keeping the daily experience calm.':'يوضح الاتجاه كيف يدعم نظام تصميم منظم العمل المعقد مع الحفاظ على هدوء التجربة اليومية.',
    'Next: test realistic workloads, keyboard controls, and mobile navigation.':'التالي: اختبار أحمال عمل واقعية والتحكم بلوحة المفاتيح والتنقل على الهاتف.',
    'Morrow finance app screens showing a clear balance, spending overview, and recent activity':'شاشات تطبيق مورو تعرض الرصيد والمصروفات وآخر العمليات بوضوح',
    'Gather food pickup app screens with menu discovery and order pickup status':'شاشات تطبيق جاذر لاكتشاف القائمة ومتابعة حالة الاستلام',
    'Forma responsive workspace dashboard on a desktop display and tablet':'لوحة مساحة عمل فورما المتجاوبة على شاشة مكتبية وجهاز لوحي'
  });
  Object.assign(translations, {
    'CASE STUDY / 01':'دراسة مشروع / ٠١','CASE STUDY / 02':'دراسة مشروع / ٠٢','CASE STUDY / 03':'دراسة مشروع / ٠٣',
    'KAREM EHAB · UI/UX':'كريم إيهاب · تصميم واجهات وتجربة مستخدم',
    'Selected interface direction':'اتجاه الواجهة المختار','Next case':'المشروع التالي','View project':'شاهد المشروع'
  });
  /* Arabic is written as a native portfolio voice: clear, modern, and client-friendly. */
  Object.assign(translations, {
    'Work':'المشاريع','About':'نبذة','Play':'نلعب؟','Let’s talk':'نتكلم؟',
    'Make yourself at home.':'خلّي الموقع على ذوقك.','Appearance':'شكل الموقع','Language':'اللغة',
    'UI/UX DESIGNER · ALEXANDRIA, EGYPT':'مصمم تجارب رقمية · الإسكندرية',
    'Good design.':'فكرة أوضح.','Great':'وتجربة','feeling.':'أحلى.',
    'UI/UX design with a playful edge.':'بصمّم واجهات بسيطة، عملية، وفيها روح.',
    'Explore my work':'شوف المشاريع','A little joy':'لمسة بهجة',
    'LESS FRICTION':'تعقيد أقل','MORE FEELING':'إحساس أكتر','CLEAR THINKING':'فكرة أوضح','BOLD IDEAS':'أفكار جريئة',
    '01 / SELECTED EXPLORATIONS':'٠١ / مشاريع مختارة','Selected work.':'شغل مختار بعناية.',
    'Everyday finance, simplified':'فلوسك اليومية من غير تعقيد','Good food, ready for pickup':'اختار، اطلب، واستلم بسهولة','Room for focused work':'مساحة هادية للشغل المهم',
    '02 / ABOUT':'٠٢ / نبذة سريعة','Design mind.':'بصمّم بعين.','Business thinking.':'وبفكّر بعقلية بيزنس.',
    'I connect clear product thinking with playful, usable interfaces.':'بربط هدف المنتج بتجربة واضحة، عملية، وفيها شخصية.',
    'Education':'الدراسة','Bachelor of Business Administration':'بكالوريوس إدارة أعمال','Management Information Systems · Alexandria University':'نظم معلومات إدارية · جامعة الإسكندرية',
    'Skills':'المهارات','Design':'التصميم','Tools':'الأدوات','Build':'التنفيذ',
    'UI/UX Design':'تصميم UI/UX','Product Design':'تصميم المنتجات','Interaction Design':'تصميم التفاعل','Prototyping':'بروتوتايب',
    'Adobe Creative Suite':'أدوات أدوبي','Design Systems':'أنظمة التصميم','Front-end collaboration':'تعاون مع مطوري الواجهات',
    '03 / THE DETAILS':'٠٣ / التفاصيل اللي تفرق','Designed to feel easy.':'تفاصيل تخلي التجربة أسهل.',
    'Clarity':'وضوح','Less to decode.':'تفهمها من أول نظرة.','Flow':'انسيابية','Fewer steps.':'خطوات أقل.','Delight':'شخصية','A little personality.':'لمسة تفضل في الذاكرة.',
    'PIXEL PAIRS':'طابق الأشكال','COLOR HUNT':'صيد الألوان','Good eyes. Great matches.':'ركّز… ولقّي التطابق.','Color Hunt':'صيد الألوان',
    'Score':'نقاطك','Best':'أفضل نتيجة','Restart game':'ابدأ من جديد','Find six pairs. +100 per match, −10 per miss.':'كوّن ٦ أزواج. +١٠٠ للتطابق و−١٠ للخطأ.',
    'Find your first pair.':'ابدأ بأول زوج.','Find its matching tile.':'فين الشكل اللي شبهه؟','Different shapes. Remember their places.':'مش نفس الشكل—افتكر مكانهم.',
    'Try another pair.':'جرّب زوج تاني.','One shade stands out.':'في لون مختلف مستخبي بينهم.','Pixel Pairs matching tiles':'لعبة مطابقة الأشكال','Color Hunt: find the lighter tile':'صيد الألوان: اختار الدرجة الأفتح',
    'Explore':'اكتشف','What I do':'بشتغل على','Made with curiosity.':'اتعمل بفضول وشغف.','Write a brief':'احكي لي فكرتك',
    'LET’S START WITH AN IDEA':'نبدأ من الفكرة','What’s your idea?':'إيه الفكرة اللي في بالك؟','Write a brief to download and share.':'اكتب نبذة بسيطة وخد نسخة جاهزة تشاركها.',
    'Your name':'اسمك','Tell me about the project':'احكي لي عن المشروع','How should I call you?':'تحب أناديك بإيه؟','The idea, the challenge, and what you want to achieve…':'الفكرة، المشكلة، والنتيجة اللي نفسك توصل لها…',
    'Download my brief':'نزّل ملخص المشروع','Your brief stays on your device. This form doesn’t send a message.':'الملف بيتحفظ عندك فقط—مش بيتم إرسال أي بيانات.',
    'CASE STUDY / 01':'مشروع / ٠١','CASE STUDY / 02':'مشروع / ٠٢','CASE STUDY / 03':'مشروع / ٠٣','KAREM EHAB · UI/UX':'كريم إيهاب · UI/UX',
    'Selected interface direction':'اتجاه التصميم النهائي','Role':'دوري','Platform':'المنصة','Scope':'نوع المشروع','Product design':'تصميم المنتج','UI/UX design':'تصميم UI/UX','Mobile':'موبايل','Responsive web':'ويب متجاوب',
    'Fintech concept':'تجربة مالية','Food pickup concept':'طلب واستلام أكل','Workspace concept':'مساحة عمل',
    'THE SIMPLE STORY':'الحكاية ببساطة','What changed—and why it matters.':'إيه اللي اتغيّر؟ وليه ده مهم؟','The problem':'المشكلة','The design move':'قرار التصميم','The result':'النتيجة',
    'Important money details competed for attention.':'الأرقام المهمة كانت ضايعة وسط تفاصيل كتير.','Put balance, activity, and key actions first.':'خلّيت الرصيد والحركة وأهم الخطوات في الواجهة.','A faster, calmer way to understand money.':'المستخدم يفهم فلوسه أسرع ومن غير توتر.',
    'Choosing and collecting lunch felt disconnected.':'اختيار الأكل واستلامه كانوا خطوات منفصلة ومربكة.','Join menu discovery, ordering, and pickup status.':'ربطت الاختيار والطلب وحالة الاستلام في رحلة واحدة.','Less uncertainty from first bite to handoff.':'خطوات أوضح وانتظار أقل لحد الاستلام.',
    'Projects and tasks became visual noise.':'المشاريع والمهام كانت زحمة بتشتت التركيز.','Separate workspace structure from today’s focus.':'فصلت تنظيم الشغل عن أولويات النهارده.','A clearer place to decide what happens next.':'مكان أهدى يوضح الخطوة الجاية بسرعة.',
    'DESIGN IN ACTION':'التصميم وهو شغّال','See the idea,':'شوف الفكرة،','not just the words.':'مش بس الكلام.','Balance at a glance':'الرصيد من أول نظرة','Spending made visual':'الصرف بشكل مفهوم','Food discovery':'اختيار يشهّي','Pickup confidence':'استلام من غير قلق','Daily priorities':'أولويات اليوم','A system that scales':'نظام يكبر مع الشغل',
    'MOTION PREVIEW':'حركة الواجهة','The interface responds without getting in the way.':'الواجهة بترد عليك من غير ما تعطّلك.','Small movements confirm actions, update charts, and guide attention to what changed.':'حركات خفيفة تأكد الخطوة، تحدّث الأرقام، وتلفت عينك للتغيير المهم.',
    'Every step feels connected.':'كل خطوة بتكمّل اللي قبلها.','Cards move with the order journey while status changes stay clear and reassuring.':'الكروت بتتحرك مع رحلة الطلب، وحالته تفضل واضحة ومطمنة.',
    'Progress appears when it matters.':'التقدم يظهر وقت ما تحتاجه.','Subtle card movement and live summaries show change without pulling focus from the work.':'حركة هادية وملخصات مباشرة توضّح الجديد من غير ما تشتتك.',
    'Looping interface motion preview':'معاينة متحركة للواجهة','Next case':'المشروع اللي بعده','View project':'افتح المشروع',
    'A calmer way to understand everyday money.':'فلوسك واضحة من أول نظرة.','Good food, from discovery to pickup without the wait.':'من اختيار الأكلة لحد الاستلام—من غير لخبطة.','A workspace that makes room for focused creative work.':'مساحة مرتبة تسيب تركيزك للشغل المهم.',
    '01 / CHALLENGE':'٠١ / المشكلة','02 / APPROACH':'٠٢ / الحل','03 / DESIGN DECISIONS':'٠٣ / قرارات التصميم','04 / OUTCOME':'٠٤ / النتيجة',
    'Make the next decision obvious.':'الخطوة الجاية لازم تبقى واضحة.','Balances, spending, and common actions often compete for attention. The experience needed a calmer hierarchy that could answer the most important questions at a glance.':'المستخدم محتاج يعرف رصيده، صرفه، ويعمل أهم خطوة بسرعة. رتبت الواجهة عشان الإجابة تظهر من أول نظرة.',
    'Start with what matters today.':'الأهم الأول، والباقي وقت الحاجة.','I centered the home screen on the current balance, recent activity, and the actions people use most—then reduced everything else to quiet supporting detail.':'بدأت بالرصيد وآخر حركة والخطوات المتكررة. باقي التفاصيل موجودة، لكن من غير ما تزاحم المهم.',
    'Clarity without feeling clinical.':'وضوح من غير ما الواجهة تبقى جافة.','A compact spending visual, generous spacing, and one strong action color create rhythm while keeping financial information easy to scan.':'رسم بسيط للصرف، مساحات مريحة، ولون واحد للحركة المهمة—عشان العين تلاقي المعلومة بسرعة.',
    'A focused finance concept.':'تجربة مالية أهدى وأسهل.','The result is a mobile direction that keeps essential information readable, reassuring, and ready for realistic usability testing.':'النتيجة واجهة مفهومة ومطمنة، وتقدر تتجرب مع مستخدمين حقيقيين بسهولة.',
    'Make a hungry moment feel simple.':'قرار الأكل ما ينفعش يبقى معقد.','People need to choose quickly, understand what they are ordering, and know exactly when it will be ready. The flow had to remove doubt without losing appetite appeal.':'المستخدم عايز يختار بسرعة، يفهم طلبه، ويعرف هيستلمه إمتى. صممت الرحلة عشان تشيل الحيرة وتفضل شهية.',
    'One continuous pickup journey.':'رحلة واحدة من الاختيار للاستلام.','Discovery, ordering, and pickup status share the same visual language so the experience feels connected from the first choice to the final handoff.':'المنيو والطلب وحالة الاستلام بيتكلموا نفس اللغة، فالمستخدم ما يحسش إنه بينط بين تجارب منفصلة.',
    'Warm, useful, and easy to scan.':'شهية، عملية، وسهلة القراءة.','Focused categories, transparent pricing, and prominent pickup timing keep the interface lively while protecting the task.':'تصنيفات مختصرة، سعر واضح، ووقت استلام ظاهر—من غير ما روح البراند تضيع.',
    'Less waiting. More confidence.':'انتظار أقل. وثقة أكتر.','The concept turns an everyday lunch decision into a compact flow with clear progress and a more memorable personality.':'الفكرة بتحول قرار غدا عادي لرحلة قصيرة، واضحة، وليها شخصية.',
    'Keep growing work understandable.':'الشغل يكبر، بس يفضل مفهوم.','As projects, notes, and tasks grow, the interface can become the distraction. Forma needed to make priorities visible without turning the dashboard into a wall of widgets.':'لما المشاريع والمهام تزيد، الواجهة نفسها ممكن تبقى مصدر تشتيت. فورما بتوضح الأولويات من غير زحمة لوحات.',
    'Separate navigation from attention.':'نظّم المكان، وسيب التركيز للمهمة.','Persistent navigation holds the workspace structure while the main canvas stays focused on today’s priorities, progress, and next actions.':'التنقل الثابت ماسك هيكل الشغل، والمساحة الرئيسية مركزة على أولويات النهارده والخطوة الجاية.',
    'A quiet system with useful signals.':'نظام هادي وإشاراته واضحة.','Consistent components, calm colors, and concise summaries help people orient themselves quickly across screen sizes.':'مكونات ثابتة، ألوان هادية، وملخصات سريعة تخلي المستخدم فاهم مكانه على أي شاشة.',
    'More room for the work itself.':'مساحة أكبر للشغل نفسه.','The direction demonstrates how a structured design system can support complex work while keeping the daily experience calm.':'نظام التصميم بيستوعب شغل معقد، لكن يفضل استخدامه اليومي بسيط ومرتب.'
  });
  Object.assign(translations, {
    'Ideas in motion.':'أفكار في حركة.','Ideas':'أفكار','in':'في','motion':'حركة','motion.':'حركة.',
    'Thoughtful design. Playful by nature.':'تصميم مدروس. بروح مرحة.',
    'Discover my work':'اكتشف أعمالي',
    'A new product, a better experience, or something unexpected. Tell me what you have in mind.':'منتج جديد، تجربة أفضل، أو فكرة مختلفة. احكي لي ما يدور في بالك.',
    'Go to project brief':'انتقل إلى تفاصيل المشروع',
    'UI/UX design with clarity, rhythm, and joy.':'تصميم UI/UX بوضوح، وإيقاع، ولمسة بهجة.',
    'Scroll to move':'مرّر لتحرّك المجسم',
    'Interactive cobalt three-dimensional orbital sculpture':'مجسم مداري أزرق ثلاثي الأبعاد وتفاعلي',
    'Glossy cobalt loop sculpture surrounded by lime and coral orbiting spheres':'مجسم أزرق لامع تحيط به كرات ليمونية ومرجانية',
    'UI/UX DESIGNER · ALEXANDRIA':'مصمم تجارب رقمية · الإسكندرية',
    'AVAILABLE FOR NEW IDEAS':'متاح لأفكار جديدة',
    'Design that':'تصميم',
    'moves people.':'يحرّك الإحساس.',
    'Clear digital experiences, playful motion, and a little unexpected joy.':'تجارب رقمية واضحة، حركة فيها روح، ولمسة بهجة غير متوقعة.',
    'See selected work':'شوف المشاريع المختارة',
    'Scroll to move the model':'مرّر وحرّك المجسم',
    'CLARITY':'وضوح','MOTION':'حركة','JOY':'بهجة',
    'Make it move':'حرّكه',
    'THOUGHTFUL INTERFACES / PLAYFUL ENERGY':'واجهات مدروسة / روح مرحة',
    'ALEXANDRIA → EVERYWHERE':'الإسكندرية ← لكل مكان',
    'Interactive three-dimensional design orbit':'مجسم تصميم ثلاثي الأبعاد وتفاعلي'
  });
  const numbers = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  function translate(value) {
    const key = value.trim();
    let result = translations[key];
    const names = { circle:'دائرة',ring:'حلقة',diamond:'معيّن',plus:'علامة جمع',square:'مربع',spark:'بريق' };
    let match;
    if (!result && (match = key.match(/^A match! (\d+) pairs to go\.$/))) result = `تطابق! بقي ${numbers(match[1])} أزواج.`;
    if (!result && (match = key.match(/^All six pairs found in (\d+) moves\. Nicely spotted! Play another round\?$/))) result = `وجدت كل الأزواج في ${numbers(match[1])} محاولات. أحسنت! جولة أخرى؟`;
    if (!result && (match = key.match(/^All eight colors found in (\d+) picks\. Sharp eyes! Try another round\?$/))) result = `وجدت كل الألوان في ${numbers(match[1])} اختيارات. نظرة حادة! جولة أخرى؟`;
    if (!result && (match = key.match(/^Found it! Hunt (\d+) of 8: find the lighter tile\.$/))) result = `وجدته! الجولة ${numbers(match[1])} من ٨: اعثر على المربع الأفتح.`;
    if (!result && (match = key.match(/^Tile (\d+): (hidden|[a-z]+)(, matched)?$/))) result = `البطاقة ${numbers(match[1])}: ${match[2]==='hidden'?'مخفية':names[match[2]]||match[2]}${match[3]?'، متطابقة':''}`;
    if (!result && (match = key.match(/^Color tile (\d+)(, same shade as the others)?$/))) result = `مربع اللون ${numbers(match[1])}${match[2]?'، نفس درجة المربعات الأخرى':''}`;
    if (!result && (match = key.match(/^All pairs found! (\d+) points\. Try for a new high score\?$/))) result = `وجدت كل الأزواج! ${numbers(match[1])} نقطة. هل تحاول تحقيق نتيجة أعلى؟`;
    if (!result && (match = key.match(/^Game over\. (\d+) points\. Start a new game\.$/))) result = `انتهت اللعبة. ${numbers(match[1])} نقطة. ابدأ لعبة جديدة.`;
    if (!result && (match = key.match(/^Not quite\. (\d+) lives left\. Look for the lighter tile\.$/))) result = `غير صحيح. بقي ${numbers(match[1])} فرص. ابحث عن المربع الأفتح.`;
    if (!result && (match = key.match(/^\+(\d+) points! Find the next lighter tile\.$/))) result = `+${numbers(match[1])} نقطة! اعثر على المربع الأفتح التالي.`;
    if (!result) return value;
    return value.replace(key, result);
  }
  const originals = new WeakMap();
  const attributes = new WeakMap();
  function translateNode(node) {
    if (!node.parentElement || node.parentElement.closest('script,style,[data-no-translate]')) return;
    let original = originals.get(node);
    if (original === undefined || (node.nodeValue !== original && node.nodeValue !== translate(original))) original = node.nodeValue;
    originals.set(node, original);
    const next = locale === 'ar' ? translate(original) : original;
    if (node.nodeValue !== next) node.nodeValue = next;
  }
  function applyTranslations() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translateNode(walker.currentNode);
    document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(node => {
      if (node.closest('[data-no-translate]')) return;
      const stored = attributes.get(node) || {};
      ['aria-label','placeholder','title','alt'].forEach(key => {
        if (!node.hasAttribute(key)) return;
        const value = node.getAttribute(key);
        let original = stored[key];
        if (original === undefined || (value !== original && value !== translate(original))) original = value;
        stored[key] = original;
        const next = locale === 'ar' ? translate(original) : original;
        if (value !== next) node.setAttribute(key, next);
      });
      attributes.set(node, stored);
    });
  }
  function updateTheme() {
    const preference = ['system','light','dark'].includes(root.dataset.theme) ? root.dataset.theme : 'system';
    root.dataset.theme = preference;
    root.dataset.effectiveTheme = preference === 'system' ? (systemTheme.matches ? 'dark' : 'light') : preference;
    themeControl.value = preference;
    document.querySelector('meta[name="theme-color"]').content = root.dataset.effectiveTheme === 'dark' ? '#101218' : '#f5f5f3';
    document.querySelectorAll('[data-light-src][data-dark-src]').forEach(image => {
      const nextSource = root.dataset.effectiveTheme === 'dark' ? image.dataset.darkSrc : image.dataset.lightSrc;
      if (image.getAttribute('src') !== nextSource) image.setAttribute('src', nextSource);
    });
  }
  themeControl.addEventListener('change', () => {
    root.dataset.theme = themeControl.value;
    try { localStorage.setItem('karem-theme', themeControl.value); } catch (_) {}
    updateTheme();
  });
  systemTheme.addEventListener('change', updateTheme);
  function updateLocale() {
    root.lang = locale; root.dir = locale === 'ar' ? 'rtl' : 'ltr';
    window.portfolioLocale = locale;
    localeControl.textContent = locale === 'ar' ? 'English' : 'العربية';
    localeControl.lang = locale === 'ar' ? 'en' : 'ar';
    localeControl.setAttribute('aria-label', locale === 'ar' ? 'التبديل إلى الإنجليزية' : 'Switch to Arabic');
    document.title = locale === 'ar' ? 'كريم إيهاب — مصمم واجهات وتجربة مستخدم' : 'Karem Ehab — UI/UX Designer';
    applyTranslations();
    document.dispatchEvent(new Event('localechange'));
  }
  localeControl.addEventListener('click', () => {
    locale = locale === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('karem-locale', locale); } catch (_) {}
    updateLocale();
  });
  updateTheme(); updateLocale();
  const observer = new MutationObserver(records => {
    if (records.some(record => record.type === 'childList' || record.type === 'characterData' || record.type === 'attributes')) applyTranslations();
  });
  observer.observe(document.body, { subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:['aria-label','placeholder','title','alt'] });
})();
