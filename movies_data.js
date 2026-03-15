// ═══════════════════════════════════════════════════════
//  Fish Cinema — Общая база фильмов
//  Подключи этот файл на любой странице фильма:
//  <script src="movies_data.js"></script>
//  Затем вызови: renderSmartRecs("movieKey", "rec-grid-id")
// ═══════════════════════════════════════════════════════

const FISH_MOVIES = [
  { title:"Зелёная книга",                   file:"Green_book.html",                            key:"Green Book",                            year:2018, country:"США",             genres:["драма","биография"],           directors:["Питер Фаррелли"],                    actors:["Вигго Мортенсен","Махершала Али"],                                       img:"https://new.kinogo.fi/poster/100/1108577.jpg" },
  { title:"Первый мститель",                 file:"Captain_america.html",                       key:"Captain America The First Avenger",     year:2011, country:"США",             genres:["боевик","фантастика"],         directors:["Джо Джонстон"],                      actors:["Крис Эванс","Томми Ли Джонс","Хьюго Уивинг"],                           img:"https://kinogo.online/uploads/posts/2021-02/1614451243-2137657427.jpg" },
  { title:"Элизиум: Рай не на Земле",        file:"Elysium.html",                               key:"Elysium",                               year:2013, country:"США",             genres:["фантастика","боевик"],         directors:["Нилл Бломкамп"],                     actors:["Мэтт Дэймон","Джоди Фостер","Шарлто Копли"],                            img:"https://svit.tartugi.net/uploads/posts/2024-02/1707064518-elizium-ray-ne-na-zemle.jpg" },
  { title:"Я, снова я и Ирэн",               file:"Me_myself_irene_2.html",                     key:"Me Myself and Irene",                   year:2000, country:"США",             genres:["комедия"],                     directors:["Питер Фаррелли","Бобби Фаррелли"],   actors:["Джим Керри","Рене Зеллвегер"],                                          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaGCcpsdKcQLyjRLWW9ZOGmQOU9JyuLV2zQ&s" },
  { title:"Тупой и ещё тупее",               file:"Dumb_and_dumber.html",                       key:"Dumb and Dumber To",                    year:2014, country:"США",             genres:["комедия"],                     directors:["Питер Фаррелли","Бобби Фаррелли"],   actors:["Джим Керри","Джефф Дэниелс"],                                           img:"https://ikinogo.biz/uploads/mini/fullsm/2d/7a4245fcc4d7bacc66bb7ff25f32f1.jpg" },
  { title:"Звёздный путь",                   file:"Star_trek.html",                             key:"Star Trek 2009",                        year:2009, country:"США",             genres:["фантастика","боевик"],         directors:["Дж.Дж. Абрамс"],                     actors:["Крис Пайн","Закари Куинто","Карл Урбан"],                               img:"https://upload.wikimedia.org/wikipedia/ru/2/29/Startrekposter.jpg" },
  { title:"Хороший, Плохой, Злой",           file:"good-bad-ugly.html",                         key:"good-bad-ugly",                         year:1966, country:"Испания",         genres:["вестерн"],                     directors:["Серджо Леоне"],                      actors:["Клинт Иствуд","Эли Уоллак","Ли Ван Клиф"],                             img:"https://kinogo.online/uploads/mini/shortstory-mob/ed1/1614517323-1826304193.jpg" },
  { title:"Бойцовский клуб",                 file:"fight_club.html",                            key:"Fight Club",                            year:1999, country:"США",             genres:["триллер","драма"],             directors:["Дэвид Финчер"],                      actors:["Брэд Питт","Эдвард Нортон","Хелена Бонэм Картер"],                     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFS7WEw3dSnvD-pu6GKh0CDhf5g6uXC6vow&s" },
  { title:"Таксист",                         file:"taxi_driver_1976.html",                      key:"taxi_driver_1976",                      year:1976, country:"США",             genres:["драма","триллер"],             directors:["Мартин Скорсезе"],                   actors:["Роберт Де Ниро","Джоди Фостер","Харви Кейтель"],                        img:"https://preview.redd.it/taxi-driver-1976-v0-2vafsern2tnf1.jpg?width=640&crop=smart&auto=webp&s=c0319ef604e7680dd8c420851d775d7fe9d2f549" },
  { title:"За пригоршню долларов",           file:"per_un_pugno_di_dollari.html",               key:"Per un pugno di dollari",               year:1964, country:"Италия",          genres:["вестерн"],                     directors:["Серджо Леоне"],                      actors:["Клинт Иствуд","Джан Мария Волонте"],                                    img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/1c264e88-1b05-4df3-8bb4-8d6316e9270d/600x900" },
  { title:"На несколько долларов больше",    file:"for-a-few-dollars-more.html",                key:"For a Few Dollars More",                year:1965, country:"Испания",         genres:["вестерн"],                     directors:["Серджо Леоне"],                      actors:["Клинт Иствуд","Ли Ван Клиф","Джан Мария Волонте"],                     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxtEljwymUbifbP48s0ryFIgLy1OYI-j4mQ&s" },
  { title:"Хулиганы Зеленой улицы",         file:"Green_Street_hooligans.html",                key:"Green_Street_hooligans",                year:2005, country:"Великобритания",  genres:["драма","боевик"],              directors:["Лекси Александр"],                  actors:["Элайджа Вуд","Чарли Ханнэм"],                                           img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHJV4wLnEGE55pI8bIKVStLfKanT8O9gYXQ&s" },
  { title:"Великий уравнитель",              file:"The_Equalizer.html",                         key:"The Equalizer",                         year:2014, country:"США",             genres:["боевик","триллер"],            directors:["Антуан Фукуа"],                      actors:["Дензел Вашингтон","Хлоя Морец"],                                        img:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/f0031dfe-adf2-4b26-a5e2-7dfc404a2124/220x330" },
  { title:"Старикам тут не место",           file:"No_Country_for_Old_Men.html",                key:"No Country for Old Men",                year:2007, country:"США",             genres:["триллер","криминал","драма"],  directors:["Итан Коэн","Джоэл Коэн"],            actors:["Хавьер Бардем","Томми Ли Джонс","Джош Бролин"],                        img:"https://kinogo.online/uploads/posts/2021-02/1614528496-1821078516.jpg" },
  { title:"Гарольд и Кумар уходят в отрыв", file:"Harold_&_Kumar_Go_to_White_Castle.html",     key:"Harold & Kumar Go to White Castle",     year:2004, country:"США",             genres:["комедия"],                     directors:["Денни Лейнер"],                      actors:["Джон Чо","Кал Пенн"],                                                   img:"https://upload.wikimedia.org/wikipedia/ru/9/9f/Harold_%26_Kumar_Go_to_White_Castle.jpg" },
  { title:"Скауты против зомби",            file:"Scouts_Guide_to_the_Zombie_Apocalypse.html", key:"Scouts Guide to the Zombie Apocalypse", year:2015, country:"США",             genres:["комедия","ужасы"],             directors:["Кристофер Ландон"],                  actors:["Тай Шеридан","Логан Миллер"],                                           img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNnvbVtGJ_vWshr3Rlh7_FVI0gUw2-lovnZg&s" },
  { title:"Поезд в Пусан",                  file:"Busanhaeng.html",                            key:"Busanhaeng",                            year:2016, country:"Южная Корея",     genres:["ужасы","боевик","драма"],      directors:["Ён Сан-хо"],                         actors:["Кон Ю","Чон Ю-ми","Ма Дон-сок"],                                       img:"https://thumbs.dfs.ivi.ru/storage0/contents/7/8/4b95783a0147f383c9f0b0bb1bc691.jpg" },
  { title:"Добро пожаловать в Зомбилэнд",   file:"Zombieland.html",                            key:"Zombieland",                            year:2009, country:"США",             genres:["комедия","ужасы"],             directors:["Рубен Фляйшер"],                     actors:["Джесси Айзенберг","Вуди Харрельсон","Эмма Стоун"],                     img:"https://kinogo.online/uploads/posts/2021-02/1614519780-1944811101.jpg" },
  { title:"Отряд самоубийц",                file:"Suicide_squad.html",                         key:"Suicide Squad",                         year:2016, country:"США",             genres:["боевик","фантастика"],         directors:["Дэвид Эйер"],                        actors:["Уилл Смит","Марго Робби","Джаред Лето"],                                img:"https://upload.wikimedia.org/wikipedia/ru/4/4d/Suicide_Squad.jpeg" },
  { title:"Хан Соло",                       file:"Solo_star_wars.html",                        key:"Solo A Star Wars Story",                year:2018, country:"США",             genres:["фантастика","боевик"],         directors:["Рон Ховард"],                        actors:["Олден Эренрайк","Эмилия Кларк","Дональд Гловер"],                      img:"https://kinogo.media/uploads/posts/2021-10/1634804136_iphone360_841277.jpg" },
  { title:"Плохие парни",                   file:"Bad_boys.html",                              key:"Bad Boys",                              year:1995, country:"США",             genres:["боевик","комедия"],            directors:["Майкл Бэй"],                         actors:["Уилл Смит","Мартин Лоуренс"],                                           img:"https://play-lh.googleusercontent.com/JZn-yp1_a7RD8Wwk9-CgL-B-Fa51RaGt8rNITKLFddwYhtCLQ1fKd9MlY1OegXRkx1HS" },
  { title:"Троя",                           file:"Troy.html",                                  key:"Troy",                                  year:2004, country:"США",             genres:["боевик","история","драма"],    directors:["Вольфганг Петерсен"],                actors:["Брэд Питт","Эрик Бана","Орландо Блум"],                                 img:"https://static.okko.tv/images/v4/61956c39-2775-427d-9a86-c43f1d8ce0e1" },
  { title:"Блэйд",                          file:"Blade.html",                                 key:"Blade",                                 year:1998, country:"США",             genres:["боевик","ужасы","фантастика"], directors:["Стивен Норрингтон"],                 actors:["Уэсли Снайпс","Стивен Дорф"],                                           img:"https://upload.wikimedia.org/wikipedia/ru/e/e5/Blade_2_plakat_gross.jpg" },
  { title:"Голодные игры",                  file:"Hunger_games.html",                          key:"The Hunger Games",                      year:2012, country:"США",             genres:["фантастика","боевик","драма"], directors:["Гэри Росс"],                         actors:["Дженнифер Лоуренс","Джош Хатчерсон","Лиам Хемсворт"],                  img:"https://kinogo.online/uploads/mini/shortstory-mob/84f/1614468212-1246767137.jpg" },
  { title:"Пункт назначения",               file:"Final_destination.html",                     key:"Final Destination",                     year:2000, country:"США",             genres:["ужасы","триллер"],             directors:["Джеймс Вонг"],                       actors:["Девон Сава","Али Ларте"],                                               img:"https://kinogo.online/uploads/posts/2021-02/1614472317-1321259434.jpg" },
  { title:"Полтора шпиона",                 file:"Spies.html",                                 key:"Spies 2015",                            year:2015, country:"США",             genres:["комедия","боевик"],            directors:["Пол Фейг"],                          actors:["Мелисса МакКарти","Джейсон Стэйтем","Джуд Лоу"],                       img:"https://www.palladium-cinema.com.ua/storage/upload/film/poltora-shpiona/spp-1.jpg" },
  { title:"Полицейская академия",           file:"Police_academy.html",                        key:"Police Academy 1984",                   year:1984, country:"США",             genres:["комедия"],                     directors:["Хью Уилсон"],                        actors:["Стив Гуттенберг","Ким Кэтролл"],                                        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEIwhv3Ckww8VTUJpnjBaYVSC6YcVJl0Lhg&s" },
  { title:"Очень страшное кино",            file:"Scary_movie.html",                           key:"Scary Movie 2000",                      year:2000, country:"США",             genres:["комедия","пародия"],           directors:["Киинан Айвори Уэйанс"],              actors:["Шон Уэйанс","Марлон Уэйанс","Анна Фэрис"],                             img:"https://kinogo.online/uploads/posts/2021-02/1614431711-60734677.jpg" },
  { title:"Майор Пейн",                     file:"Major_payne.html",                           key:"Major Payne 1995",                      year:1995, country:"США",             genres:["комедия"],                     directors:["Ник Касл"],                          actors:["Дэймон Уэйанс"],                                                        img:"https://kinogo.online/uploads/mini/shortstory-mob/81e/1614363946-1621052681.jpg" },
  { title:"Без чувств",                     file:"Bez_chuvstv_1998.html",                      key:"Bez chuvstv 1998",                      year:1998, country:"Украина",         genres:["драма"],                       directors:["Николай Мащенко"],                   actors:["Богдан Ступка","Ада Роговцева"],                                        img:"https://mobb.kinovasek.men/uploads/posts/2025-03/67dafbd41d177.webp" },
  { title:"Робот по имени Чаппи",           file:"Chappie.html",                               key:"Chappie 2015",                          year:2015, country:"ЮАР / США",      genres:["фантастика","боевик"],         directors:["Нилл Бломкамп"],                     actors:["Дев Патель","Хью Джекман","Шарлто Копли"],                              img:"https://www.hdclub.ua/files/film_release/big/bigi55759efdc9425.jpg" },
  { title:"Рокки",                          file:"Rocky.html",                                 key:"Rocky 1976",                            year:1976, country:"США",             genres:["драма","спорт"],               directors:["Джон Эвилдсен"],                     actors:["Сильвестр Сталлоне","Тэлия Шайр","Берт Янг"],                          img:"https://kinogo.online/uploads/posts/2021-02/1614398240-303155765.jpg" },
  { title:"Да здравствует Франция!",        file:"Vive_la_France.html",                        key:"Vive la France 2013",                   year:2013, country:"Франция",         genres:["комедия"],                     directors:["Мурад Мустафа Борхани"],             actors:["Жозе Гарсия","Мед Хондо"],                                             img:"https://play-lh.googleusercontent.com/whxZ9r9DvZKBef7_ZorHAtbD5MINTF9xVk_pTcOvhwVCRYMfnOszsqAAoKkb4fvnON8aag" },
  { title:"Джентльмены",                    file:"Gentlemen.html",                             key:"The Gentlemen 2019",                    year:2019, country:"Великобритания",  genres:["криминал","комедия"],          directors:["Гай Ричи"],                          actors:["Мэттью МакКонахи","Чарли Ханнэм","Хью Грант","Колин Фаррелл"],         img:"https://new.kinogo.fi/poster/100/1143242.jpg" },
  { title:"Форрест Гамп",                   file:"Forrest_gump.html",                          key:"Forrest Gump 1994",                     year:1994, country:"США",             genres:["драма","мелодрама"],           directors:["Роберт Земекис"],                    actors:["Том Хэнкс","Робин Райт","Гэри Синис"],                                 img:"https://kinogo.online/uploads/posts/2021-02/1614404652-1341878282.jpg" },
  { title:"Рэмбо",                          file:"Rambo.html",                                 key:"Rambo First Blood 1982",                year:1982, country:"США",             genres:["боевик","драма"],              directors:["Тед Котчефф"],                       actors:["Сильвестр Сталлоне","Брайан Деннехи"],                                  img:"https://kinogo.ec/uploads/posts/2020-03/1585442933-1829798561.jpg" },
  { title:"Выживший",                       file:"The_Revenant.html",                          key:"The Revenant 2015",                     year:2015, country:"США",             genres:["драма","боевик"],              directors:["Алехандро Гонсалес Иньярриту"],     actors:["Леонардо ДиКаприо","Том Харди"],                                        img:"https://kinogo.online/uploads/posts/2021-02/1614528568-1065569495.jpg" },
  { title:"Апокалипсис по-голливудски",     file:"This_is_the_End.html",                       key:"This Is the End 2013",                  year:2013, country:"США",             genres:["комедия","ужасы"],             directors:["Сет Роген","Эван Голдберг"],         actors:["Джеймс Франко","Джона Хилл","Сет Роген"],                              img:"https://play-lh.googleusercontent.com/AoLjRe-KKJqd8ogN33AhIdbpQTOQFvaUDZjIkuf5v0LaPGdKv4N--FX97XkDpuWA4i9V" },
  { title:"Мост в Терабитию",               file:"Bridge_to_Terabithia.html",                  key:"Bridge to Terabithia 2007",             year:2007, country:"США",             genres:["драма","фэнтези","семейный"],  directors:["Габор Чупо"],                        actors:["Джош Хатчерсон","АннаСофия Робб"],                                      img:"https://mobb.kinovasek.men/uploads/posts/2025-03/67db17498a418.webp" },
  { title:"Банда Келли",                    file:"Ned_Kelly.html",                             key:"Ned Kelly 2003",                        year:2003, country:"Австралия",       genres:["драма","криминал","вестерн"],  directors:["Грегор Джордан"],                    actors:["Хит Леджер","Орландо Блум","Наоми Уоттс"],                             img:"https://kinogo.media/uploads/posts/2021-10/1634994106_iphone360_5572.jpg" },
  { title:"Хоббит: Нежданное путешествие",  file:"Hobbit.html",                                key:"The Hobbit 2012",                       year:2012, country:"Новая Зеландия",  genres:["фэнтези","приключения"],       directors:["Питер Джексон"],                     actors:["Мартин Фриман","Иэн МакКеллен","Ричард Армитидж"],                     img:"https://kinogo.online/uploads/posts/2021-02/1614408723-1574705447.jpg" },
  { title:"Ущелье",                         file:"Gorge.html",                                 key:"The Gorge 2025",                        year:2025, country:"США",             genres:["фантастика","мелодрама","боевик"],directors:["Скотт Дерриксон"],              actors:["Майлз Теллер","Аня Тейлор-Джой"],                                       img:"https://kinogo.online/uploads/posts/2025-02/1741618926-95a5cfd520_124112.jpg" },
  { title:"Криминальное чтиво",             file:"Pulp_fiction.html",                          key:"Pulp Fiction 1994",                     year:1994, country:"США",             genres:["криминал","триллер","драма"],  directors:["Квентин Тарантино"],                 actors:["Джон Траволта","Сэмюэл Л. Джексон","Ума Турман","Брюс Уиллис"],       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOc_nYJ6EvcrCVy6WQ-t5tTCtRvw12buu9Q&s" },
  { title:"Где моя тачка, чувак?",          file:"Dude_wheres_my_car.html",                    key:"Dude Wheres My Car 2000",               year:2000, country:"США",             genres:["комедия"],                     directors:["Дэнни Лейнер"],                      actors:["Эштон Катчер","Шон Уильям Скотт"],                                      img:"https://upload.wikimedia.org/wikipedia/ru/f/fe/Dude%2C_Where%27s_My_Car.jpg" },
  { title:"Джанго освобождённый",           file:"Django.html",                                key:"Django Unchained 2012",                 year:2012, country:"США",             genres:["вестерн","боевик","криминал"], directors:["Квентин Тарантино"],                 actors:["Джейми Фокс","Кристоф Вальц","Леонардо ДиКаприо"],                     img:"https://kinogo.online/uploads/posts/2021-02/1614410299-1099694772.jpg" },
  { title:"Карате-пацан",                   file:"Karate_kid.html",                            key:"The Karate Kid 2010",                   year:2010, country:"США / Китай",     genres:["драма","боевик","семейный"],   directors:["Харальд Цварт"],                     actors:["Джейден Смит","Джеки Чан"],                                             img:"https://kinogo.online/uploads/mini/shortstory-mob/492/1614458213-830135586.jpg" },
  { title:"Муви 43",                        file:"Movie_43.html",                              key:"Movie 43 2013",                         year:2013, country:"США",             genres:["комедия","пародия"],           directors:["Питер Фаррелли","Боб Оденкёрк"],    actors:["Хью Джекман","Кейт Уинслет","Хэлли Берри"],                            img:"https://mobb.kinovasek.men/uploads/posts/2025-03/67daf54f2f903.webp" },
  { title:"Последний киногерой",            file:"Last_action_hero.html",                      key:"Last Action Hero 1993",                 year:1993, country:"США",             genres:["боевик","комедия","фэнтези"],  directors:["Джон МакТирнан"],                    actors:["Арнольд Шварценеггер","Остин О'Брайен"],                                img:"https://www.kino-teatr.ru/movie/posters/big/4/3/17434.jpg" },
  { title:"Пол: Секретный материальчик",    file:"Paul.html",                                  key:"Paul 2011",                             year:2011, country:"Великобритания",  genres:["комедия","фантастика"],        directors:["Грег Моттола"],                      actors:["Саймон Пегг","Ник Фрост","Сет Роген"],                                 img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZzyUs7VZPIKv66use17mojiKWYc6-SH98w&s" },
  { title:"Хэнкок",                         file:"Hancock.html",                               key:"Hancock 2008",                          year:2008, country:"США",             genres:["боевик","комедия","фантастика"],directors:["Питер Берг"],                       actors:["Уилл Смит","Шарлиз Терон","Джейсон Бейтман"],                          img:"https://kinogo.online/uploads/posts/2021-02/1614415093-1395068612.jpg" },
  { title:"Время",                          file:"In_Time.html",                               key:"in_time_2011",                          year:2011, country:"США",             genres:["фантастика","боевик","триллер"],directors:["Эндрю Никкол"],                    actors:["Джастин Тимберлейк","Аманда Сейфрид","Киллиан Мёрфи"],                 img:"https://kinogo.online/uploads/posts/2021-02/1614395730-1614395730.jpg" },
  { title:"Белые цыпочки",                  file:"White_Chicks.html",                          key:"white_chicks_2004",                     year:2004, country:"США",             genres:["комедия"],                     directors:["Киинан Айвори Уэйанс"],              actors:["Шон Уэйанс","Марлон Уэйанс","Терри Крюс"],                             img:"https://upload.wikimedia.org/wikipedia/ru/5/51/White_Chicks.jpg" },
  { title:"Бегущий в лабиринте",            file:"Maze_Runner.html",                           key:"maze_runner_2014",                      year:2014, country:"США",             genres:["фантастика","боевик","триллер"],directors:["Уэс Болл"],                        actors:["Дилан О'Брайен","Кая Скоделарио","Томас Броди-Сангстер"],              img:"https://kinogo.online/uploads/posts/2021-02/1614420018-1614420018.jpg" },
  { title:"Гладиатор",                      file:"Gladiator.html",                             key:"gladiator_2000",                        year:2000, country:"США",             genres:["боевик","история","драма"],    directors:["Ридли Скотт"],                       actors:["Рассел Кроу","Хоакин Феникс","Конни Нильсен"],                          img:"https://kinogo.online/uploads/posts/2021-02/1614399274-1614399274.jpg" },
  { title:"Миллион способов потерять голову",file:"Million_Ways.html",                         key:"million_ways_2014",                     year:2014, country:"США",             genres:["комедия","вестерн"],           directors:["Сет МакФарлейн"],                    actors:["Сет МакФарлейн","Шарлиз Терон","Лиам Нисон","Аманда Сейфрид"],        img:"https://kinogo.online/uploads/posts/2021-02/1614510276-1614510276.jpg" },
  { title:"50 первых поцелуев",             file:"50_First_Dates.html",                        key:"50_first_dates_2004",                   year:2004, country:"США",             genres:["комедия","мелодрама"],         directors:["Питер Сигал"],                       actors:["Адам Сэндлер","Дрю Бэрримор","Роб Шнайдер"],                           img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQmxUJWzAX-Jnp2vTDdO1RqJm5HgX5YN5Cw&s" },
  { title:"Семь",                           file:"Seven.html",                                 key:"seven_1995",                            year:1995, country:"США",             genres:["криминал","триллер","детектив"],directors:["Дэвид Финчер"],                    actors:["Брэд Питт","Морган Фриман","Кевин Спейси"],                             img:"https://kinogo.online/uploads/posts/2021-02/1614396506-1614396506.jpg" },
  { title:"Матрица",                        file:"Matrix.html",                                key:"matrix_1999",                           year:1999, country:"США",             genres:["фантастика","боевик","триллер"],directors:["Лана Вачовски","Лилли Вачовски"],  actors:["Киану Ривз","Лоренс Фишбёрн","Кэрри-Энн Мосс","Хьюго Уивинг"],       img:"https://kinogo.online/uploads/posts/2021-02/1614391860-1614391860.jpg" },
  { title:"Смешанные",                      file:"Blended.html",                               key:"blended_2014",                          year:2014, country:"США",             genres:["комедия","мелодрама"],         directors:["Фрэнк Корачи"],                      actors:["Адам Сэндлер","Дрю Бэрримор","Белла Торн"],                            img:"https://kinogo.online/uploads/posts/2021-02/1614438920-1614438920.jpg" },
  { title:"Папе снова 17",                  file:"17_Again.html",                              key:"17_again_2009",                         year:2009, country:"США",             genres:["комедия","фэнтези","драма"],   directors:["Бёрр Стирс"],                        actors:["Зак Эфрон","Мэттью Перри","Лесли Манн"],                               img:"https://kinogo.online/uploads/posts/2021-02/1614427008-1614427008.jpg" },
  { title:"Супер перцы",                    file:"Superbad.html",                              key:"superbad_2007",                         year:2007, country:"США",             genres:["комедия"],                     directors:["Грег Моттола"],                      actors:["Джона Хилл","Майкл Сера","Кристофер Минц-Пласс"],                      img:"https://m.media-amazon.com/images/M/MV5BY2IyNTE0NjYtNjNjMS00Zjk4LWI3YjktYzU1NTYxNzM0OTdiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg" },
  { title:"Поймай меня если сможешь",       file:"Catch_Me_If_You_Can.html",                   key:"catch_me_if_you_can_2002",              year:2002, country:"США",             genres:["криминал","биография","драма"], directors:["Стивен Спилберг"],                  actors:["Леонардо ДиКаприо","Том Хэнкс","Кристофер Уокен"],                    img:"https://kinogo.online/uploads/posts/2021-02/1614393240-1614393240.jpg" },
  { title:"Солдаты неудачи",                file:"Tropic_Thunder.html",                        key:"tropic_thunder_2008",                   year:2008, country:"США",             genres:["комедия","боевик","пародия"],  directors:["Бен Стиллер"],                       actors:["Бен Стиллер","Джек Блэк","Роберт Дауни Мл."],                          img:"https://kinogo.online/uploads/posts/2021-02/1614436228-1614436228.jpg" },
  { title:"Зелёная миля",                   file:"Green_Mile.html",                            key:"green_mile_1999",                       year:1999, country:"США",             genres:["драма","фэнтези","криминал"],  directors:["Фрэнк Дарабонт"],                    actors:["Том Хэнкс","Майкл Кларк Дункан","Дэвид Морс"],                         img:"https://kinogo.online/uploads/posts/2021-02/1614394116-1614394116.jpg" },
];

// ═══════════════════════════════════════════════════════
//  СЕРИИ / ПРОДОЛЖЕНИЯ — связываем вручную
// ═══════════════════════════════════════════════════════
const SERIES_GROUPS = [
  ["Per un pugno di dollari", "For a Few Dollars More", "good-bad-ugly"],
  ["Captain America The First Avenger"],
  ["The Hunger Games", "maze_runner_2014", "in_time_2011"],
  ["Zombieland"],
  ["Scary Movie 2000"],
  ["Police Academy 1984"],
  ["Bad Boys"],
  ["Rocky 1976", "Rambo First Blood 1982"],
  ["Blade"],
  ["Final Destination"],
  ["Harold & Kumar Go to White Castle"],
  ["Star Trek 2009"],
  ["The Hobbit 2012"],
  ["The Equalizer"],
];

// ═══════════════════════════════════════════════════════
//  УМНЫЙ АЛГОРИТМ РЕКОМЕНДАЦИЙ
// ═══════════════════════════════════════════════════════
function getSmartRecs(currentKey, count = 4) {
  const current = FISH_MOVIES.find(m => m.key === currentKey);
  if (!current) return [];

  const others = FISH_MOVIES.filter(m => m.key !== currentKey);
  const scored = others.map(m => {
    let score = 0;
    let badge = "similar";
    let badgeText = "Похожее";

    // 1. Продолжение/часть серии — высший приоритет
    const currentSeries = SERIES_GROUPS.find(g => g.includes(currentKey));
    if (currentSeries && currentSeries.includes(m.key)) {
      score += 100;
      badge = "sequel";
      badgeText = "Из серии";
    }

    // 2. Тот же главный актёр (первые 2 актёра — главные)
    const currentMainActors = current.actors.slice(0, 2);
    const matchActors = m.actors.filter(a => currentMainActors.includes(a));
    if (matchActors.length > 0) {
      score += 40 * matchActors.length;
      if (score < 100) { badge = "actor"; badgeText = matchActors[0]; }
    }

    // 3. Тот же режиссёр
    const matchDir = m.directors.filter(d => current.directors.includes(d));
    if (matchDir.length > 0) {
      score += 30;
      if (score < 40) { badge = "director"; badgeText = "Тот же режиссёр"; }
    }

    // 4. Совпадение жанров
    const matchGenres = m.genres.filter(g => current.genres.includes(g));
    score += matchGenres.length * 10;

    // 5. Близкий год (+/- 5 лет)
    if (Math.abs(m.year - current.year) <= 5) score += 5;

    return { ...m, score, badge, badgeText };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

// ═══════════════════════════════════════════════════════
//  РЕНДЕР РЕКОМЕНДАЦИЙ В HTML
// ═══════════════════════════════════════════════════════
function renderSmartRecs(currentKey, containerId = "smartRecs") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const recs = getSmartRecs(currentKey);
  if (!recs.length) { container.innerHTML = ""; return; }

  const badgeColors = {
    sequel:   "background:linear-gradient(135deg,#7a3a00,#c06010);color:#fff;box-shadow:0 0 10px rgba(200,90,0,0.6)",
    actor:    "background:linear-gradient(135deg,#1a3a6a,#2060b0);color:#fff",
    director: "background:linear-gradient(135deg,#3a1a6a,#6030a0);color:#fff",
    similar:  "background:rgba(30,24,14,0.88);border:1px solid var(--gold-dim);color:var(--gold)",
  };

  container.innerHTML = recs.map((m, i) => `
    <a href="${m.file}" class="rec-card" style="animation-delay:${i * 0.07}s">
      <div class="rec-card-inner">
        <img src="${m.img}" alt="${m.title}" loading="lazy">
        <div class="rec-card-overlay">
          <div class="rec-card-overlay-title">${m.title}</div>
          <div class="rec-card-overlay-meta">${m.country} · ${m.year} · ${m.genres[0]}</div>
        </div>
        <span class="rec-badge" style="${badgeColors[m.badge] || badgeColors.similar}">${m.badgeText}</span>
      </div>
      <div class="rec-card-title">${m.title}</div>
      <div class="rec-card-year">${m.year}</div>
    </a>
  `).join("");
}
