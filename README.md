# the-choice

## jeu de choix

1. [choix de l'équipe]: [red (rien ne se passe)] or [yellow (-20 health, "le jaune attire tout les moustiques vous vous etes déseché")]

---

2. [chercher de la food]: [yes( on divise par deux la vie, "vous allez utilisé une bonne partie de votre force vitale pour vous nourrir, le jeun intermitant était peut-être une solution" =>3.1)] or [no ( -20 health, "attendre sur la plage vous donne faim..." )]

---

3.1) [ gouter ou faire gouter les trouvailles]: [gouter((VIE*2)+5, "vous etes un avenuturier agueri, vous differencez les racines, mais le repas est trop mince +5 en vie " => 4.1)], [faire gouter( pnj: 100health, playerhealth = 5, "vous etes généreux et ça va vous tuer"=>4.2)]

3.2) [prendre la nourriture ou se laisser vivre]: [prendre (isDead=true, "vous auriez du vous activé pour differencier le manioque d'une simple racine" =>finish)] or [se laisser vivre (-20 health & pnj vie = 5, "vous etes le seul survivant economiser ses forces a été rentable"=>4.3)]

---

4.1) [un aventurier qui a glander vous demandes pour recuperer les restes car il a faim, mais il est mal vu par le reste de l'équipe ?]: [accepter : pnj +=20,"le glandeur de l'equipe vous apprecie, mais vous etes mal vu par le reste de l'équipe, dorénavant vous avez des ennemies"=> 5.1] or [refuser : pnj : isDead=true, "vous semblez avoir choisi d'être influencé par l'équipe, votre empathie semble s'être fait la male pour 100K" => 5.2]

4.2) [ vous avez de nouveau faim, chercher de la food ?] : [chercher : isDead=true, "il faut savoir être égoiste de temps en temps, maintenant les autres peuvent continué l'aventure, mais sans vous..."=>finish] or [ne pas chercher : isDead=true, "le glandeur à vraiment eu pitié de vous, il vous à donc donné a manger, mais c'est un glandeur il n'a pas reussi à differencier les racines, vous mourrez intoxiqué" =>finish]

4.3) [il reste une journée d'aventure, continuer ou arreter ?] : continuer [ vie =100,name="cafard" "vous avez gagné, mais votre Façon de faire n'a pas plus aux telespactateur, il éprouve du dégout envers vous, on vous appelle dorénavent le Cafard, vous allez finir seul..."=>finish ] or [arreter : vie =100,name="celui qui a loupé les 100k", vous etes rentré, mais on vous considére comme un lache qui a arreté à un jour de la fin, on ne connait plus votre prenom, vous etes dorenavant surnommé celui name="celui qui a loupé les 100k"=>finish]

---

5.1) [tout le monde vous deteste sur le camp, vous excusez auprés des autres ou faire équipe avec le glandeur?]: [s'excuser : vie = 100, name="le credule", "vous avez été eliminé du jeu, le reste de l'équipe a feinté de vous pardonnez , pour mieux vous éliminer"=>finish] or [s'allier: vie=100; name="celui qui li entre les lignes", "il s'avere que le glandeur est un sportif pro, qui voulait s'économiser,vous avez formé la meilleur alliance vu à ce jour, peut importe qui aller gagner vous avez fait 50/50, car gagner c'est bien, mais 50K c'est mieux..."=>finish ]

5.2) [vous avez des remords sur le camps suite à la mort du glandeur, vous vous en voulez une seul solution => mourir or mourir => isdead=true]
