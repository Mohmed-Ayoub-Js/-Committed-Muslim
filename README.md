# مقدمة
بسم الله الرحمن الرحيم.

بعد التحية، يتوجه هذا النص إلى المطورين الذين يمتلكون خبرة في تطوير البرمجيات باستخدام لغة البرمجة جافا سكريبت، ويُفضل أيضًا أن يكونوا على دراية بتايب سكريبت ومكتبة ريأكت ومكتبة تايل ويند سي اس اس. بالنسبة للأفراد الذين ليس لديهم خبرة في مجال البرمجة، يمكنهم المساهمة في المشروع عن طريق نشره والمشاركة فيه.

# عن التطبيق
تطبيق "المسلم الملتزم" يسعى إلى توفير تجربة مستخدم دينية، حيث يمكن للمستخدمين قراءة القرآن الكريم، أو الاستماع إليه، أو حتى الاستماع إلى تلاوة القرآن الكريم مباشرة. كما يقدم التطبيق أيضًا خيارات لفهم وتفسير القرآن الكريم، بالإضافة إلى الذكر. يتميز التطبيق بواجهة مستخدم عصرية وجميلة، تتناغم مع التصميم اللوني.

# قواعد خاصة
لضمان تنظيم الشيفرة وهيكل الملفات، نستوحي تنظيم الملفات من ترتيب ملفات Next.js، مع الهيكل التالي:
- ملفات الصفحات: `Page.tsx`
- ملفات المكونات: `/Components`
- ملف مكون التطبيق: `app`
- ملف المكونات الداخلية: `child`
- ملفات المكونات الخاصة: `custom`
- ملفات مكونات مكتبة shadcn-ui: `shadcn/ui`

كما نفضل عدم استخدام مكتبة `react-router-dom`، بل نستخدم `switch()`:
```jsx
switch (currentPage) {
  case 'home':
    return (
      <div>
        <div className="hidden md:block">
          <Home change={navigateToPage} />
        </div>
        <p className="text-3xl font-bold text-red-500 md:hidden">
          يرجى تكبير الشاشة
        </p>
        <p className="text-1xl text-gray-600 md:hidden">
          لا يمكن تنسيق التطبيق في حجم شاشة صغير جداً، خاصةً أن هذا التطبيق
          موجه إلى أجهزة الكمبيوتر
        </p>
      </div>
    )

  case 'about':
    return (
      <div>
        <h1>صفحة حول</h1>
        <p>محتوى الصفحة حول</p>
        <button onClick={() => navigateToPage('home')}>
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    )

  default:
    return <div>صفحة غير معروفة</div>
}
```