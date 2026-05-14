// ─────────────────────────────────────────────────────────────────────────────
// SYSTÈME BLOG NHK
// Pour ajouter un article : dupliquer un objet dans BLOG_POSTS ci-dessous.
// Pas de dépendances externes, tout est typé.
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string; // URL de l'article (ex: "gerer-son-stress-au-quotidien")
  title: string; // Titre SEO + affichage
  excerpt: string; // Résumé court (155 chars max pour SEO)
  date: string; // Format ISO: "2024-09-15"
  readTime: string; // "5 min"
  category: BlogCategory;
  tags: string[];
  featured?: boolean; // Mettre en avant sur la homepage
  coverAlt: string; // Alt text pour l'image de couverture
  content: string; // Contenu HTML de l'article
}

export type BlogCategory =
  | "Stress & Anxiété"
  | "Confiance en soi"
  | "Relations"
  | "Burn-out"
  | "Développement personnel"
  | "Parentalité"
  | "Coaching de vie"
  | "Sommeil"
  | "Adolescence";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  ARTICLES — Ajoutez vos articles ici
// ─────────────────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  // ───────────── ARTICLES EXISTANTS ─────────────
  {
    slug: "comprendre-son-anxiete-pour-mieux-la-traverser",
    title: "Comprendre son anxiété pour mieux la traverser",
    excerpt:
      "L'anxiété n'est pas un ennemi — c'est un signal. Apprendre à l'écouter plutôt qu'à la combattre change tout. Voici comment l'approche intégrative envisage ce chemin.",
    date: "2025-01-15",
    readTime: "6 min",
    category: "Stress & Anxiété",
    tags: ["anxiété", "gestion des émotions", "approche intégrative"],
    featured: true,
    coverAlt: "Femme regardant par la fenêtre dans un moment de calme",
    content: `
<p>L'anxiété est l'une des expériences humaines les plus courantes — et pourtant, l'une des moins bien comprises. On a tendance à la traiter comme une ennemie à vaincre, à réduire au silence, à effacer. Mais cette posture crée souvent plus de souffrance qu'elle n'en résout.</p>

<h2>L'anxiété comme signal, pas comme défaut</h2>
<p>Physiologiquement, l'anxiété est une réponse d'alerte de notre système nerveux. Elle nous dit : <em>"Quelque chose mérite ton attention."</em> Le problème survient quand ce signal se déclenche trop souvent, trop fort, sans stimulus réel — ou quand nous n'avons jamais appris à l'écouter.</p>
<p>Dans mon approche, je propose d'abord un geste simple : <strong>nommer ce qui se passe</strong>. Pas pour analyser intellectuellement, mais pour créer une distance suffisante entre vous et la sensation. "Je ressens de l'anxiété" est très différent de "Je suis anxieux".</p>

<h2>Ce que l'approche intégrative apporte de différent</h2>
<p>Plutôt que de chercher systématiquement la cause racine dans le passé, l'accompagnement intégratif s'intéresse à <strong>ce qui se passe maintenant</strong> : quelles pensées accompagnent l'anxiété ? Dans quel contexte apparaît-elle ? Qu'avez-vous essayé jusqu'ici pour la calmer — et est-ce que ça fonctionne vraiment ?</p>
<p>Ces questions ne sont pas rhétoriques. Elles permettent de cartographier votre relation avec l'anxiété pour commencer à la modifier, pas à la supprimer.</p>

<h2>Un premier pas concret</h2>
<p>La prochaine fois que vous ressentez de l'anxiété, essayez ceci : posez une main sur votre sternum, respirez lentement, et demandez-vous — <em>de quoi est-ce que j'ai besoin là, maintenant ?</em> Pas dans 10 minutes. Là.</p>
<p>Cette question simple réoriente l'attention du symptôme vers le besoin sous-jacent. C'est le début d'un dialogue intérieur plus bienveillant.</p>

<p>Si vous souhaitez explorer cela plus loin, je vous invite à me contacter pour un premier échange.</p>
    `,
  },
  {
    slug: "burn-out-comment-reconstruire-apres-lepuisement",
    title: "Burn-out : comment se reconstruire après l'épuisement",
    excerpt:
      "Le burn-out n'est pas une faiblesse. C'est l'épuisement d'une personne qui a trop longtemps ignoré ses limites. Comprendre ce qui s'est passé est la première étape pour repartir.",
    date: "2025-02-08",
    readTime: "8 min",
    category: "Burn-out",
    tags: ["burn-out", "reconstruction", "épuisement professionnel"],
    featured: true,
    coverAlt: "Lumière douce sur une plante qui repousse",
    content: `
<p>Le burn-out, ce n'est pas "être fatigué". C'est un effondrement total des ressources — physiques, émotionnelles, mentales — après une période trop longue où l'on a donné plus que ce que l'on avait.</p>

<h2>Ce que le burn-out nous apprend</h2>
<p>Il y a une paradoxe dans le burn-out : il touche le plus souvent des personnes très engagées, perfectionnistes, à fort sens des responsabilités. Des personnes qui, précisément, ont du mal à dire non, à poser des limites, à se prioriser.</p>
<p>En ce sens, le burn-out n'est pas un accident. C'est un message — brutal, mais cohérent — du corps et du psychisme qui disent : <em>"Je ne peux plus continuer comme ça."</em></p>

<h2>Les phases de reconstruction</h2>
<p>La reconstruction après un burn-out se fait rarement en ligne droite. Il y a des jours où tout semble possible, et d'autres où le simple fait de se lever est un effort. C'est normal.</p>
<p>Dans l'accompagnement, nous travaillons sur trois niveaux :</p>
<ul>
  <li><strong>Le repos authentique</strong> — distinguer le repos véritable du simple arrêt d'activité</li>
  <li><strong>La compréhension des schémas</strong> — identifier ce qui vous a conduit au burn-out pour ne pas y retourner</li>
  <li><strong>La réorientation douce</strong> — redécouvrir ce qui vous nourrit vraiment, pas ce qui vous épuise</li>
</ul>

<h2>Le temps de la reconstruction</h2>
<p>Il n'existe pas de calendrier universel. Certaines personnes retrouvent de l'élan en quelques mois, d'autres ont besoin d'un an ou plus. L'important n'est pas la vitesse — c'est la direction.</p>
<p>Si vous traversez actuellement un burn-out, ou si vous vous reconnaissez dans ces mots, sachez qu'un accompagnement adapté peut faire une vraie différence. Non pas pour aller vite, mais pour aller mieux — vraiment.</p>
    `,
  },
  {
    slug: "retrouver-confiance-en-soi-pas-a-pas",
    title: "Retrouver confiance en soi : un chemin, pas une destination",
    excerpt:
      "La confiance en soi ne se décrète pas. Elle se construit, geste après geste, dans les petites victoires quotidiennes et les renoncements nécessaires.",
    date: "2025-03-20",
    readTime: "5 min",
    category: "Confiance en soi",
    tags: ["confiance en soi", "estime de soi", "développement personnel"],
    featured: false,
    coverAlt: "Personne marchant vers la lumière dans une forêt",
    content: `
<p>On entend souvent des conseils du type "croyez en vous" ou "ayez confiance". Comme si la confiance était un interrupteur qu'on pouvait allumer à volonté. Ce n'est pas comme ça que ça fonctionne.</p>

<h2>Qu'est-ce que la confiance en soi, vraiment ?</h2>
<p>La confiance en soi, c'est la conviction profonde — pas intellectuelle, mais viscérale — que vous avez les ressources nécessaires pour faire face à ce que la vie vous apporte. Pas que vous réussirez tout. Mais que vous pourrez traverser.</p>
<p>Cette conviction se construit dans l'expérience. Elle ne vient pas d'un livre, d'une affirmation positive ou d'un discours motivant. Elle naît quand vous avez surmonté quelque chose de difficile — et que vous vous en êtes souvenu.</p>

<h2>L'effet mémoire</h2>
<p>L'un des exercices les plus puissants que je propose en séance est simple : dresser la liste des moments où vous avez tenu, où vous avez fait quelque chose malgré la peur, où vous avez pris soin de vous-même ou des autres malgré l'adversité.</p>
<p>Ce n'est pas de la nostalgie. C'est construire un récit de soi plus juste, plus complet que "je ne suis pas capable".</p>

<h2>Le rôle du corps</h2>
<p>La confiance en soi s'exprime aussi physiquement — dans la posture, la voix, la respiration. Travailler sur ces dimensions corporelles, en parallèle du travail psychique, accélère la transformation. Le corps mémorise ce que l'esprit apprend.</p>
    `,
  },

  // ───────────── NOUVEAUX ARTICLES ─────────────
  {
    slug: "insomnie-retrouver-un-sommeil-reparateur",
    title: "Insomnie : retrouver un sommeil réparateur et apaisé",
    excerpt:
      "L'insomnie est souvent le reflet d'un déséquilibre entre le corps et l'esprit. Comprendre ses causes est la première étape pour retrouver un sommeil profond et réparateur.",
    date: "2026-02-17",
    readTime: "6 min",
    category: "Sommeil",
    tags: ["insomnie", "sommeil", "stress", "bien-être"],
    featured: false,
    coverAlt: "Chambre apaisante baignée de lumière douce du soir",
    content: `
<p>L'insomnie n'est pas une fatalité. Elle est souvent le reflet d'un déséquilibre entre le corps et l'esprit, d'un stress trop intense ou de pensées qui tournent en boucle. Comprendre ses causes est la première étape pour retrouver un sommeil profond et réparateur.</p>

<h2>Qu'est-ce que l'insomnie ?</h2>
<p>L'insomnie se caractérise par des difficultés à s'endormir, des réveils fréquents pendant la nuit, un sommeil non réparateur et une fatigue persistante le lendemain. Elle peut être passagère — due à une période de stress — ou chronique, impactant alors la santé physique, la concentration, l'humeur et la qualité de vie.</p>

<h2>Les causes fréquentes</h2>
<p>L'insomnie peut être liée à plusieurs facteurs : le stress et l'anxiété, les ruminations et pensées répétitives, des habitudes de sommeil irrégulières, des transitions de vie ou changements importants, ou encore un surmenage physique ou émotionnel. Comprendre la cause principale de votre insomnie est essentiel pour trouver des solutions efficaces.</p>

<h2>Comment améliorer son sommeil ?</h2>
<p>Plusieurs stratégies peuvent vous aider à retrouver un sommeil réparateur :</p>
<ul>
  <li><strong>Établir une routine régulière</strong> — Se coucher et se lever à des heures fixes, même le week-end, aide à réguler le rythme biologique.</li>
  <li><strong>Préparer un environnement propice</strong> — Chambre calme, obscurité, température agréable, suppression des écrans avant le coucher.</li>
  <li><strong>Apaiser le mental</strong> — Exercices de respiration, méditation, relaxation ou journal intime pour vider les pensées avant de dormir.</li>
  <li><strong>Repenser ses journées</strong> — Activité physique modérée, alimentation équilibrée, gestion du stress et des émotions.</li>
</ul>

<h2>L'accompagnement professionnel</h2>
<p>En tant que psychopraticienne et coach de vie, je propose un accompagnement sur mesure qui permet de comprendre les causes de votre insomnie, développer des stratégies personnalisées pour mieux dormir, gérer le stress et les angoisses qui perturbent le sommeil, et retrouver calme, énergie et sérénité au quotidien.</p>
<p>L'accompagnement peut être individuel ou en couple, et se combine parfaitement avec un suivi médical si nécessaire.</p>

<h2>Reprendre le contrôle de vos nuits</h2>
<p>Chaque personne est différente : il n'existe pas de solution unique. Mais avec un accompagnement adapté et des méthodes concrètes, il est possible de retrouver un sommeil réparateur, de se réveiller reposé et de renouer avec une vie plus équilibrée.</p>

<p>Si vous souffrez d'insomnie et que vous souhaitez trouver des solutions durables, je vous propose une première séance d'écoute pour déterminer l'accompagnement qui vous correspond.</p>
    `,
  },
  {
    slug: "coaching-de-vie-prendre-les-renes",
    title: "Coaching de vie : prendre les rênes de sa vie et avancer sereinement",
    excerpt:
      "Le coaching de vie n'est pas réservé à ceux qui vont mal. C'est un accompagnement pour mieux se connaître, clarifier ses objectifs et avancer avec confiance.",
    date: "2026-02-20",
    readTime: "7 min",
    category: "Coaching de vie",
    tags: ["coaching", "développement personnel", "objectifs", "confiance"],
    featured: true,
    coverAlt: "Personne debout face à un paysage lumineux, regard tourné vers l'avenir",
    content: `
<p><em>« Le coaching de vie n'est pas réservé à ceux qui vont mal. C'est un accompagnement pour toutes les personnes qui souhaitent mieux se connaître, clarifier leurs objectifs et avancer avec confiance et sérénité. »</em></p>

<h2>Qu'est-ce que le coaching de vie ?</h2>
<p>Le coaching de vie est un processus d'accompagnement qui vous aide à identifier ce que vous voulez vraiment dans votre vie, comprendre ce qui vous bloque ou freine vos décisions, définir des objectifs clairs et réalistes, et passer à l'action pour créer une vie plus alignée avec vos valeurs.</p>
<p>Contrairement à la thérapie, le coaching se concentre sur le présent et l'avenir, avec des solutions concrètes et un plan d'action personnalisé.</p>

<h2>Pourquoi se faire accompagner ?</h2>
<p>Beaucoup de personnes se sentent parfois perdues, dépassées ou insatisfaites, même si leur vie semble "réussie" aux yeux des autres. Le coaching de vie aide à clarifier vos priorités et vos valeurs, retrouver confiance en vos capacités, gérer le stress et les transitions de vie, améliorer vos relations personnelles et professionnelles, et dépasser les blocages pour passer à l'action.</p>
<p>Un coach agit comme un accompagnateur et miroir bienveillant, pour que vous puissiez prendre conscience de vos ressources et de vos possibilités.</p>

<h2>Les étapes d'un coaching de vie</h2>
<p>Chaque accompagnement est personnalisé, mais il suit généralement trois grandes étapes :</p>
<ul>
  <li><strong>Prise de conscience</strong> — Identifier vos forces, vos ressources et ce qui vous freine.</li>
  <li><strong>Définition des objectifs</strong> — Clarifier ce que vous voulez réellement, à court et long terme.</li>
  <li><strong>Action et suivi</strong> — Mettre en place des stratégies concrètes et ajuster le plan selon vos résultats et vos ressentis.</li>
</ul>

<h2>Coaching de vie et bien-être global</h2>
<p>Le coaching ne se limite pas à la réussite professionnelle ou à la performance. Il vise l'harmonie entre votre vie personnelle, relationnelle et professionnelle. Que ce soit pour dépasser un burn-out, améliorer votre relation de couple, trouver un équilibre entre vie personnelle et professionnelle, ou traverser une période de transition — le coaching de vie vous aide à retrouver clarté, motivation et sérénité.</p>

<h2>L'accompagnement personnalisé</h2>
<p>En tant que psychopraticienne et coach de vie, je propose un accompagnement qui allie écoute bienveillante et action concrète, prend en compte votre histoire personnelle et vos objectifs, peut être réalisé en individuel ou en couple, et peut compléter un suivi psychiatrique si nécessaire.</p>
<p>Chaque séance est un espace sûr et confidentiel, pour vous permettre de vous recentrer et avancer à votre rythme.</p>

<h2>Faire le premier pas</h2>
<p>Se faire accompagner, c'est décider de prendre les rênes de sa vie. Si vous sentez que c'est le bon moment pour vous, une première séance d'écoute permet de voir si le coaching de vie correspond à vos besoins et à vos attentes.</p>
    `,
  },
  {
    slug: "souffrance-au-travail-comprendre-agir-reconstruire",
    title: "Souffrance au travail : comprendre, agir et se reconstruire",
    excerpt:
      "La souffrance au travail n'est pas une fatalité. Reconnaître ses signes et comprendre ce qui se joue est la première étape pour retrouver équilibre et énergie.",
    date: "2026-03-03",
    readTime: "7 min",
    category: "Burn-out",
    tags: ["souffrance au travail", "burn-out", "stress professionnel", "reconversion"],
    featured: true,
    coverAlt: "Bureau épuré baigné de lumière naturelle, symbole de renouveau professionnel",
    content: `
<p>La souffrance au travail n'est pas une fatalité. Elle peut se manifester par du stress chronique, de la fatigue, un sentiment d'épuisement ou même un burn-out. Reconnaître ses signes et comprendre ce qui se joue est la première étape pour retrouver équilibre et énergie.</p>

<h2>Qu'est-ce que la souffrance au travail ?</h2>
<p>La souffrance au travail peut se traduire par un stress intense et permanent, une perte de motivation, une fatigue physique et émotionnelle, des difficultés à se concentrer, ou un sentiment d'injustice, d'incompréhension ou d'isolement.</p>
<p>Elle peut être liée à des conditions de travail difficiles, des relations conflictuelles, un manque de reconnaissance, ou une incompatibilité entre vos valeurs et votre environnement professionnel.</p>

<h2>Pourquoi la souffrance au travail survient-elle ?</h2>
<p>Certaines personnes sont plus exposées à la souffrance au travail :</p>
<ul>
  <li>Celles qui ont un <strong>sens aigu des responsabilités</strong> et ont du mal à poser des limites</li>
  <li>Celles qui sont <strong>perfectionnistes</strong> ou très engagées</li>
  <li>Celles qui traversent des <strong>changements professionnels</strong> ou organisationnels</li>
  <li>Celles qui accumulent <strong>stress et fatigue</strong> sans relâche</li>
</ul>
<p>Il est important de comprendre que la souffrance au travail est un signal : votre corps et votre esprit vous alertent qu'un changement est nécessaire.</p>

<h2>Comment agir face à la souffrance au travail ?</h2>
<ul>
  <li><strong>Prendre conscience de la situation</strong> — Identifier les causes précises de votre mal-être est essentiel.</li>
  <li><strong>Mettre des limites et se protéger</strong> — Apprendre à dire non, déléguer et organiser votre temps de manière plus saine.</li>
  <li><strong>Trouver du soutien</strong> — Parler de ce que vous vivez avec un professionnel ou une personne de confiance permet de prendre du recul et de clarifier vos besoins.</li>
  <li><strong>Se reconnecter à ce qui vous nourrit</strong> — Activités personnelles, loisirs, temps en famille ou entre amis : ce sont vos ressources pour préserver votre énergie.</li>
</ul>

<h2>L'accompagnement professionnel</h2>
<p>En tant que psychopraticienne et coach de vie, j'accompagne les personnes confrontées à la souffrance au travail pour comprendre l'origine du mal-être professionnel, définir des solutions concrètes et adaptées, apprendre à gérer le stress et les émotions, et retrouver un équilibre entre vie personnelle et professionnelle.</p>
<p>L'accompagnement peut se faire en individuel ou en couple, et peut compléter un suivi psychiatrique si nécessaire.</p>

<h2>Se reconstruire et avancer</h2>
<p>Chaque situation est unique. La souffrance au travail peut être un signal pour repenser votre manière de travailler, vos priorités et vos limites. Avec un accompagnement adapté, il est possible de retrouver énergie et motivation, redonner du sens à votre travail, et reconnecter avec vos valeurs et vos objectifs personnels.</p>

<p>Si vous traversez une période de souffrance au travail, je propose une première séance d'écoute pour explorer votre situation et voir quel accompagnement vous correspond le mieux.</p>
    `,
  },
  {
    slug: "sante-mentale-adolescents-comprendre-accompagner",
    title: "Santé mentale de nos ados : comprendre et accompagner",
    excerpt:
      "L'adolescence est une période intense et complexe. Entre changements physiques et construction de l'identité, nos ados peuvent traverser des moments de stress ou de mal-être.",
    date: "2026-03-10",
    readTime: "7 min",
    category: "Adolescence",
    tags: ["adolescence", "santé mentale", "parentalité", "anxiété", "accompagnement"],
    featured: true,
    coverAlt: "Adolescent pensif regardant par la fenêtre, lumière douce",
    content: `
<p>L'adolescence est une période intense et complexe. Entre changements physiques, émotions fortes et construction de l'identité, il n'est pas rare que nos ados traversent des moments de stress, d'anxiété ou de mal-être.</p>

<h2>Pourquoi la santé mentale des ados est essentielle</h2>
<p>Les adolescents sont particulièrement sensibles aux pressions scolaires, sociales et familiales. Les signes de mal-être peuvent inclure :</p>
<ul>
  <li>Retrait social ou isolement</li>
  <li>Tristesse, irritabilité ou changements d'humeur</li>
  <li>Difficultés à dormir ou troubles alimentaires</li>
  <li>Perte d'intérêt pour les activités qu'ils aimaient</li>
  <li>Anxiété ou inquiétudes excessives</li>
</ul>
<p>Reconnaître ces signes tôt est essentiel pour prévenir l'aggravation du mal-être et soutenir leur développement émotionnel.</p>

<h2>Les causes fréquentes</h2>
<p>Plusieurs facteurs peuvent contribuer aux difficultés psychologiques des adolescents :</p>
<ul>
  <li><strong>Stress scolaire</strong> et pression des résultats</li>
  <li><strong>Relations avec les pairs</strong> — harcèlement, isolement, réseaux sociaux</li>
  <li><strong>Conflits familiaux</strong> ou changements dans la vie familiale</li>
  <li><strong>Changements hormonaux</strong> et corporels</li>
  <li><strong>Traumatismes</strong> ou événements marquants</li>
</ul>
<p>Il est important de se rappeler que ces difficultés sont normales à l'adolescence, mais elles nécessitent parfois un accompagnement pour ne pas s'installer dans la durée.</p>

<h2>Comment aider son ado ?</h2>
<ul>
  <li><strong>Écouter sans juger</strong> — Créer un espace sûr où il peut parler librement de ses émotions et de ses expériences.</li>
  <li><strong>Encourager l'expression</strong> — Journaux, activités créatives, sport ou discussions ouvertes permettent aux adolescents de mettre des mots sur leurs émotions.</li>
  <li><strong>Maintenir des routines et limites claires</strong> — Le sommeil, l'alimentation et l'organisation quotidienne jouent un rôle crucial dans la régulation émotionnelle.</li>
  <li><strong>Observer et intervenir si nécessaire</strong> — Si les signes de mal-être persistent ou s'aggravent, un accompagnement professionnel peut aider à prévenir des troubles plus sérieux.</li>
</ul>

<h2>L'accompagnement professionnel</h2>
<p>En tant que psychopraticienne et coach de vie, j'accompagne les adolescents pour identifier leurs émotions et leurs besoins, comprendre leurs réactions et comportements, mettre en place des stratégies adaptées pour gérer le stress et l'anxiété, et développer la confiance en soi et l'autonomie.</p>
<p>L'accompagnement peut également inclure un travail avec les parents, afin de soutenir la communication et créer un environnement familial favorable.</p>

<h2>Aider nos ados à grandir sereinement</h2>
<p>La santé mentale des adolescents est un enjeu fondamental pour leur équilibre futur. Avec un accompagnement bienveillant et adapté, il est possible de prévenir l'isolement ou les troubles émotionnels, renforcer les ressources personnelles et relationnelles, et favoriser un développement harmonieux et confiant.</p>

<p>Si vous vous inquiétez pour votre ado ou souhaitez l'accompagner dans son bien-être émotionnel, je propose une première séance d'écoute pour voir quel accompagnement correspond le mieux à ses besoins.</p>
    `,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Fonctions utilitaires
// ─────────────────────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

export const ALL_CATEGORIES: BlogCategory[] = [
  "Stress & Anxiété",
  "Confiance en soi",
  "Relations",
  "Burn-out",
  "Développement personnel",
  "Parentalité",
  "Coaching de vie",
  "Sommeil",
  "Adolescence",
];
