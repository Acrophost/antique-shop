const img1 = require('../images/a1.jfif');
const img2 = require('../images/a2.jfif');
const img3 = require('../images/a3.jfif');
const img4 = require('../images/a5.jfif');
const img5 = require('../images/a9.jfif');

const Antiques = [
    {
        name: 'Lamp',
        description:
            'Donec tempus dolor ante, id lacinia sem tempor sit amet. Quisque at diam tortor. Vestibulum ligula tortor, bibendum luctus iaculis quis, facilisis id enim. Curabitur libero enim, rhoncus id elementum vel, interdum non elit. Sed lacinia facilisis ex, quis feugiat.',
        image: String(img1),
        alt: 'Vintage lamp',
    },
    {
        name: 'Kettles',
        description:
            'Nullam eu sodales justo, vitae finibus nulla. Duis varius ultricies massa, a maximus elit. Vivamus dui erat, placerat et nisl id, tincidunt pharetra mi. Vestibulum efficitur, ante et aliquam accumsan, dui ex aliquet purus, nec aliquam lorem quam sed augue.',
        image: String(img2),
        alt: 'Two old, brass kettles',
    },
    {
        name: 'Sewing machine',
        description:
            'Curabitur consectetur mollis volutpat. Curabitur at leo iaculis, pretium felis in, lobortis lectus. Nunc rutrum lacinia ligula, nec feugiat neque sagittis sed. Etiam vestibulum imperdiet imperdiet. In sed ligula bibendum, ultrices urna id, feugiat magna. In hac habitasse platea dictumst.',
        image: String(img3),
        alt: 'Black sewing machine with flower pattern',
    },
    {
        name: 'Chair',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis gravida lacus, ac convallis nisi posuere a. Pellentesque efficitur lectus ex, porttitor luctus nunc eleifend sed. Phasellus consequat suscipit consectetur. Sed ornare non nulla et sollicitudin. Aenean sagittis sapien rhoncus.',
        image: String(img4),
        alt: 'An image of a vintage chair',
    },
    {
        name: 'Figures of Holy Mary and Joseph',
        description:
            'Nam eu leo auctor, rhoncus quam id, accumsan mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dignissim tempor ex, lobortis aliquet velit ultrices vel. Vivamus sollicitudin sed dui at tempus. Praesent volutpat at metus at egestas.',
        image: String(img5),
        alt: 'Two figures made of black stone',
    },
    {
        name: 'Chair',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis gravida lacus, ac convallis nisi posuere a. Pellentesque efficitur lectus ex, porttitor luctus nunc eleifend sed. Phasellus consequat suscipit consectetur. Sed ornare non nulla et sollicitudin. Aenean sagittis sapien rhoncus.',
        image: String(img4),
        alt: 'An image of a vintage chair',
    },
    {
        name: 'Figures of Holy Mary and Joseph',
        description:
            'Nam eu leo auctor, rhoncus quam id, accumsan mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dignissim tempor ex, lobortis aliquet velit ultrices vel. Vivamus sollicitudin sed dui at tempus. Praesent volutpat at metus at egestas.',
        image: String(img5),
        alt: 'Two figures made of black stone',
    },
    {
        name: 'Lamp',
        description:
            'Donec tempus dolor ante, id lacinia sem tempor sit amet. Quisque at diam tortor. Vestibulum ligula tortor, bibendum luctus iaculis quis, facilisis id enim. Curabitur libero enim, rhoncus id elementum vel, interdum non elit. Sed lacinia facilisis ex, quis feugiat.',
        image: String(img1),
        alt: 'Vintage lamp',
    },
    {
        name: 'Kettles',
        description:
            'Nullam eu sodales justo, vitae finibus nulla. Duis varius ultricies massa, a maximus elit. Vivamus dui erat, placerat et nisl id, tincidunt pharetra mi. Vestibulum efficitur, ante et aliquam accumsan, dui ex aliquet purus, nec aliquam lorem quam sed augue.',
        image: String(img2),
        alt: 'Two old, brass kettles',
    },
    {
        name: 'Sewing machine',
        description:
            'Curabitur consectetur mollis volutpat. Curabitur at leo iaculis, pretium felis in, lobortis lectus. Nunc rutrum lacinia ligula, nec feugiat neque sagittis sed. Etiam vestibulum imperdiet imperdiet. In sed ligula bibendum, ultrices urna id, feugiat magna. In hac habitasse platea dictumst.',
        image: String(img3),
        alt: 'Black sewing machine with flower pattern',
    },
    {
        name: 'Lamp',
        description:
            'Donec tempus dolor ante, id lacinia sem tempor sit amet. Quisque at diam tortor. Vestibulum ligula tortor, bibendum luctus iaculis quis, facilisis id enim. Curabitur libero enim, rhoncus id elementum vel, interdum non elit. Sed lacinia facilisis ex, quis feugiat.',
        image: String(img1),
        alt: 'Vintage lamp',
    },
    {
        name: 'Kettles',
        description:
            'Nullam eu sodales justo, vitae finibus nulla. Duis varius ultricies massa, a maximus elit. Vivamus dui erat, placerat et nisl id, tincidunt pharetra mi. Vestibulum efficitur, ante et aliquam accumsan, dui ex aliquet purus, nec aliquam lorem quam sed augue.',
        image: String(img2),
        alt: 'Two old, brass kettles',
    },
    {
        name: 'Sewing machine',
        description:
            'Curabitur consectetur mollis volutpat. Curabitur at leo iaculis, pretium felis in, lobortis lectus. Nunc rutrum lacinia ligula, nec feugiat neque sagittis sed. Etiam vestibulum imperdiet imperdiet. In sed ligula bibendum, ultrices urna id, feugiat magna. In hac habitasse platea dictumst.',
        image: String(img3),
        alt: 'Black sewing machine with flower pattern',
    },
    {
        name: 'Chair',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis gravida lacus, ac convallis nisi posuere a. Pellentesque efficitur lectus ex, porttitor luctus nunc eleifend sed. Phasellus consequat suscipit consectetur. Sed ornare non nulla et sollicitudin. Aenean sagittis sapien rhoncus.',
        image: String(img4),
        alt: 'An image of a vintage chair',
    },
    {
        name: 'Figures of Holy Mary and Joseph',
        description:
            'Nam eu leo auctor, rhoncus quam id, accumsan mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dignissim tempor ex, lobortis aliquet velit ultrices vel. Vivamus sollicitudin sed dui at tempus. Praesent volutpat at metus at egestas.',
        image: String(img5),
        alt: 'Two figures made of black stone',
    },
    {
        name: 'Chair',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis gravida lacus, ac convallis nisi posuere a. Pellentesque efficitur lectus ex, porttitor luctus nunc eleifend sed. Phasellus consequat suscipit consectetur. Sed ornare non nulla et sollicitudin. Aenean sagittis sapien rhoncus.',
        image: String(img4),
        alt: 'An image of a vintage chair',
    },
    {
        name: 'Figures of Holy Mary and Joseph',
        description:
            'Nam eu leo auctor, rhoncus quam id, accumsan mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam dignissim tempor ex, lobortis aliquet velit ultrices vel. Vivamus sollicitudin sed dui at tempus. Praesent volutpat at metus at egestas.',
        image: String(img5),
        alt: 'Two figures made of black stone',
    },
    {
        name: 'Lamp',
        description:
            'Donec tempus dolor ante, id lacinia sem tempor sit amet. Quisque at diam tortor. Vestibulum ligula tortor, bibendum luctus iaculis quis, facilisis id enim. Curabitur libero enim, rhoncus id elementum vel, interdum non elit. Sed lacinia facilisis ex, quis feugiat.',
        image: String(img1),
        alt: 'Vintage lamp',
    },
    {
        name: 'Kettles',
        description:
            'Nullam eu sodales justo, vitae finibus nulla. Duis varius ultricies massa, a maximus elit. Vivamus dui erat, placerat et nisl id, tincidunt pharetra mi. Vestibulum efficitur, ante et aliquam accumsan, dui ex aliquet purus, nec aliquam lorem quam sed augue.',
        image: String(img2),
        alt: 'Two old, brass kettles',
    },
    {
        name: 'Sewing machine',
        description:
            'Curabitur consectetur mollis volutpat. Curabitur at leo iaculis, pretium felis in, lobortis lectus. Nunc rutrum lacinia ligula, nec feugiat neque sagittis sed. Etiam vestibulum imperdiet imperdiet. In sed ligula bibendum, ultrices urna id, feugiat magna. In hac habitasse platea dictumst.',
        image: String(img3),
        alt: 'Black sewing machine with flower pattern',
    },
];

export default Antiques;
