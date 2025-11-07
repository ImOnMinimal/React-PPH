-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2025 at 07:50 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PPH`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `quantity`) VALUES
(16, 21, 16, 1),
(17, 22, 17, 1);

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`id`, `user_id`, `product_id`) VALUES
(7, 21, 16),
(9, 23, 16),
(12, 24, 17);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `company` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'images/no-image.jpg',
  `rating` float NOT NULL DEFAULT '0',
  `reviewsNum` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `user_id`, `slug`, `name`, `company`, `price`, `description`, `image`, `rating`, `reviewsNum`) VALUES
(15, 21, 'upory-onlitop-dlya-otzhimanij-razmery-12-sm-h-30-sm-h-12-sm-cvet-miks', 'Упоры ONLITOP, для отжиманий, размеры 12 см х 30 см х 12 см, цвет микс', 'BE STRONG', 418, 'Цвет микс (выбор конкретных цветов не предоставляется, в заказ попадет случайный цвет товара). Упоры для отжимания - это эффективный и удобный аксессуар для домашнего использования, который позволяет укреплять и развивать мышцы рук, груди и тренировать мышцы плечевого пояса. Систематические занятия с использованием упоров для отжимания повышают выносливость организма, помогают избавиться от лишнего веса, делают ваше тело стройным и красивым.', 'images/66c59fc808ee9.jpg', 0, 0),
(16, 21, 'nochnik-tualet-shreka', 'Ночник туалет Шрека', 'Hand Made wth Love', 4743, 'Оригинальный подарок на день рождения для взрослых и детей! Ручная работа , идеальный подарок на любой праздник, сделано с любовью ‼️ЭКСКЛЮЗИВ‼️ Ночник изготовлен из дерева и украшен стабилизированным мхом. Обратите внимание-ночник пахнет деревом! Полностью ручная работа, на изготовление одного ночника уходит более 12 часов! Каждый домик индивидуален. Теплый желтый свет создает мягкую, уютную атмосферу, и согреет в любую погоду.️ Две пальчиковые батарейки в комплекте хватит на оооочень долгий срок. При необходимости батарейки можно будет легко поменять! Дверь с механизмом открывания.‍♀️ Этот идеальный подарок друзьям и близким подарит кучу положительных эмоций✨ Переходите в наш магазин, у нас есть другие ночники и товары ручной работы', 'images/66c59ffee9545.jpg', 3.5, 2),
(17, 21, 'kolco-gamemerch', 'Кольцо GAMEМЕРЧ', 'GameMerch', 538, 'Колечко с универсальным регулируемым размером, поэтому можете не бояться ошибиться с размером. Отличный подарок для мужа, жены, парня, друга или любимой подруги. Кольцо дополнит образ на вечеринку, в институт, на прогулку. Украшение выполнено из качественного, экологически чистого бижутерного сплава, не темнеет и не вызывает аллергию, подходит для повседневной носки. Кольца на 5 пальцев с цепочкой.', 'images/66c5a0274e74d.jpg', 0, 0),
(18, 21, 'yubka-shorty-eros', 'Юбка-шорты Eros', 'Shop-Top-Shop', 2176, 'Цвет микс (выбор конкретных цветов не предоставляется, в заказ попадет случайный цвет товара). Упоры для отжимания - это эффективный и удобный аксессуар для домашнего использования, который позволяет укреплять и развивать мышцы рук, груди и тренировать мышцы плечевого пояса. Систематические занятия с использованием упоров для отжимания повышают выносливость организма, помогают избавиться от лишнего веса, делают ваше тело стройным и красивым.', 'images/66c5a0df6dbe9.jpg', 0, 0),
(19, 21, 'perchatki', 'Перчатки', 'Mavrin Trade', 242, 'Оригинальный подарок на день рождения для взрослых и детей! Ручная работа , идеальный подарок на любой праздник, сделано с любовью ‼️ЭКСКЛЮЗИВ‼️ Ночник изготовлен из дерева и украшен стабилизированным мхом. Обратите внимание-ночник пахнет деревом! Полностью ручная работа, на изготовление одного ночника уходит более 12 часов! Каждый домик индивидуален. Теплый желтый свет создает мягкую, уютную атмосферу, и согреет в любую погоду.️ Две пальчиковые батарейки в комплекте хватит на оооочень долгий срок. При необходимости батарейки можно будет легко поменять! Дверь с механизмом открывания.‍♀️ Этот идеальный подарок друзьям и близким подарит кучу положительных эмоций✨ Переходите в наш магазин, у нас есть другие ночники и товары ручной работы', 'images/66c5a122a713d.jpg', 0, 0),
(20, 21, 'golfy-dover-golfy-zhenskie-vysokie-dover-chulki-zhenskie-hlopok', 'Гольфы Dover Гольфы женские высокие Dover, чулки женские хлопок', 'Colibri 2021', 311, 'Высокие белые гольфы с черными полосками в верхней части. Двойной эластичный бортик надежно удерживает гольфы на ноге, не передавливая ее. Модель с высоким содержанием гипоаллергенного хлопка, добавление эластана защищает от деформации и увеличивает срок службы гольфов.', 'images/66c5a17568fd0.jpg', 0, 0),
(21, 21, 'bint-bandazh-dlya-loktya-onlytop-para-razmer-universalnyj', 'Бинт-бандаж для локтя ONLYTOP, пара, размер универсальный', 'Retail Market', 380, 'Бинт-бандаж для локтя ONLYTOP, пара, размер универсальный', 'images/66c5a19782a31.jpg', 0, 0),
(22, 21, 'renni-elden-ring-(ranni-elden-ring)-80mm-cvet:-seryj', 'Ренни Элден Ринг (Ranni Elden Ring) 80мм Цвет: серый', 'Dragon Shop', 711, 'Ренни', 'images/66c5a1cd0cd7b.jpg', 0, 0),
(23, 21, 'animal-pak-the-ultimate-foundational-training-pack-pak.-610-g-44-sht.', 'Animal Pak The Ultimate Foundational Training Pack пак., 610 г, 44 шт.', 'Флекс-Спорт', 4927, 'Цвет микс (выбор конкретных цветов не предоставляется, в заказ попадет случайный цвет товара). Упоры для отжимания - это эффективный и удобный аксессуар для домашнего использования, который позволяет укреплять и развивать мышцы рук, груди и тренировать мышцы плечевого пояса. Систематические занятия с использованием упоров для отжимания повышают выносливость организма, помогают избавиться от лишнего веса, делают ваше тело стройным и красивым.', 'images/66c5a208b814a.jpg', 0, 0),
(24, 21, 'shtanga-s-plastikovymi-blinami-1275-kg-voitto', 'Штанга с пластиковыми блинами 127,5 кг Voitto', 'ganteliru', 22049, 'комплектация штанги Гриф стальной, хромированный (длина грифа 180 см, макс. нагрузка 130 кг) – 1 шт. Гайки для фиксации дисков – 2 шт. Пластиковый диск Voitto 10 кг – 12 шт. основные характеристики Материал диска: пластик Наполнитель: цемент Гриф: стальной, хромированный Цвет: черный Производитель: Voitto Страна: Китай', 'images/66c5a22b29ef6.jpg', 0, 0),
(25, 21, 'upory-dlya-otzhimanij-ot-pola-rp', 'Упоры для отжиманий от пола RP', 'Revery', 352, 'Предназначены для увеличения амплитуды движения тела в процессе выполнения упражнения. Благодаря этому нагрузка на Ваши мышцы растет. Также увеличенная амплитуда укрепляет связки и сухожилия и повышает выносливость всего тела. В результате чего мускулатура становится гораздо более рельефной, а фигура – стройной и подтянутой. Упоры способствует удобному и более эффективному выполнения одного из самых популярных упражнений - отжимания. С помощью таких упоров можно сделать больше подходов, они выдерживают сильные нагрузки. Мы рекомендуем Вам использовать упоры для отжиманий, чтобы не повредить руку во время упражнения. Характеристики: Материал ударостойкий ПВХ  неопреновая ручка Резиновая антискользящая накладка (защита пола от царапин) Размер 27 х 16 х 13 см Размер планки для хвата 24 см Максимальная нагрузка 150 кг Гарантия 2 года', 'images/66c5a249bd8f3.jpg', 0, 0),
(27, 21, 'buket-iz-shokoladnyh-pelmenej-19shkldpelmn19', 'Букет Из Шоколадных Пельменей 19SHKLDPELMN19', 'Первая Букетная', 830, 'Букет из шоколадных пельменей 19SHKLDPELMN19 - это уникальное и вкусное лакомство, которое станет отличным подарком для любителей сладкого. Букет состоит из 19 шоколадных пельменей, выполненных из белого шоколада. Это делает вкус продукта насыщенным и многогранным, а также позволяет выбрать наиболее предпочтительный вариант для каждого. Букет из шоколадных пельменей 19SHKLDPELMN19 - это не просто подарок, это настоящее гастрономическое удовольствие, которое подарит радость и наслаждение каждому, кто его попробует.', 'images/66c5a283138bb.jpg', 0, 0),
(28, 21, 'pidzhak-skvo', 'Пиджак SKVO', 'Skvo Clothe', 5240, 'Свободная и стильная вещь, на каждый день! Глубокий чёрный цвет, крутая цепь на спине, придающая жакету характер. Мы-то с вами жесткие, но ходить любим в обнимательных вещах, поэтому черный пиджак выполнен из плотного, но очень мягкого и нежного твила.', 'images/66c5a29ed7525.jpg', 0, 0),
(29, 21, 'dzhinsovaya-kurtka-new-jordan', 'Джинсовая куртка New Jordan', 'Одежда больших размеров мужская', 6483, 'Куртка ветровка мужская большого размера из плотного прочного 100% хлопка. Пошив классический. Сшита на больших мужчин с учетом особенностей большого размера. Широкий размерный ряд позволяет выбрать размер по вкусу.', 'images/66c5a2cee5669.jpg', 3, 1),
(30, 21, 'yubka-livestream', 'Юбка Livestream', 'Shop-Top-Shop', 839, 'Мини-юбка плиссированная короткая для девушек в складку - абсолютный хит последних лет, который обязан быть в гардеробе уважающей себя модницы. Слегка плиссированная юбка изготовлена из костюмной ткани и хорошо садится по фигуре, удлиняет ноги и подчеркнет красоту. Хорошо смотрится с футболками, свитшотами, блузками и топами сочитая с кроссовками, кедами или балетками. Юбка гофре актуальна в любое время года и хорошо вписывается как в повседневный, так и в деловой гардероб. Приобретая нашу плиссированную юбку Вы получаете отличное решение для школы, в офис, на вечеринку и для обычных встреч и прогулок.', 'images/66c5a2e7a537b.jpg', 0, 0),
(31, 24, 'proizvolno', 'произвольно', 'test', 123, 'отличныый товар на ваш вкус', 'images/66c5dc752c44b.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `rating` float NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `product_id`, `content`, `rating`, `created_at`) VALUES
(13, 23, 16, 'очень классный ночник', 5, '2024-08-21 13:09:36'),
(14, 23, 16, 'фи', 2, '2024-08-21 13:10:52'),
(15, 24, 29, 'отличная куртка', 3, '2024-08-21 15:22:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `login` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `avatar` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'images/no-avatar.png',
  `address` varchar(200) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `email`, `password`, `avatar`, `address`) VALUES
(21, 'Mineralka', 'не важно', '$2y$10$47Yl0sceEmeXwoFDwHEo6uXTLS2Op9xQOzfAXHUZr8izu0e3Ekntu', 'images/21.jpg', 'дом колотушкина'),
(22, 'test', 'test', '$2y$10$0PaL96l2ruErFKlWwQVR5erhUKtOw9zGTUGtTHDCrsEpllZfMkOqi', 'images/22.png', 'test'),
(23, 'test2', 'test2', '$2y$10$xHRDxHCTiecGC/kOZ0R3XOvRmmvAlHFfGhYkLLwvb7q9Z/O9iFh3G', 'images/23.jpg', 'test2'),
(24, 'test5', 'tempmail@mail.ru', '$2y$10$M/YoqWeUAgRdzS0NdOqE3OA2d8n4rfjxUKbACH4Pd7/c5WafBd3ea', 'images/24.jpg', 'дом колотушкина');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seller` (`user_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_ibfk_1` (`user_id`),
  ADD KEY `reviews_ibfk_2` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `favourite`
--
ALTER TABLE `favourite`
  ADD CONSTRAINT `favourite_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `favourite_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `seller` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
