import { combineReducers } from 'redux';

const charactersReducer = () => {
    return [
        {
            id : 1,
            name: '竈門 炭治郎',
            name_romanji: 'Kamado Tanjirō',
            gender: 'Male',
            height: '165 cm',
            weight: '61 kg',
            birthday: 'July 14th',
            occupation: 'Demon slayer',
            img_src: '/img/slayer-1.png',
            ava_src: '/img/slayer_ava-1.png',
        },
        {
            id : 2,
            name: '我妻 善逸',
            name_romanji: 'Agatsuma Zenitsu',
            gender: 'Male',
            height: '164.5 cm',
            weight: '58 kg',
            birthday: 'September 3rd',
            occupation: 'Demon slayer',
            img_src: '/img/slayer-2.png',
            ava_src: '/img/slayer_ava-2.png'
        },
        {
            id : 3,
            name: '嘴平 伊之助',
            name_romanji: 'Hashibira Inosuke',
            gender: 'Male',
            height: '164 cm',
            weight: '63 kg',
            birthday: 'April 22nd',
            occupation: 'Demon slayer',
            img_src: '/img/slayer-3.png',
            ava_src: '/img/slayer_ava-3.png'
        },
        {
            id : 4,
            name: '栗花落 カナヲ',
            name_romanji: 'Tsuyuri Kanao',
            gender: 'Female',
            height: '156 cm',
            weight: '46 kg',
            birthday: 'May 19th',
            occupation: 'Demon slayer',
            img_src: '/img/slayer-4.png',
            ava_src: '/img/slayer_ava-4.png'
        },
        {
            id : 5,
            name: '冨岡 義勇',
            name_romanji: 'Tomioka Giyū',
            gender: 'Male',
            height: '176 cm',
            weight: '69 kg',
            birthday: 'February 8th',
            occupation: 'Hashira',
            img_src: '/img/hashira-1.png',
            ava_src: '/img/hashira_ava-1.png'
        },
        {
            id : 6,
            name: '甘露寺 蜜璃',
            name_romanji: 'Kanroji Mitsuri',
            gender: 'Female',
            height: '167 cm',
            weight: '56 kg',
            birthday: 'June 1st',
            occupation: 'Hashira',
            img_src: '/img/hashira-2.png',
            ava_src: '/img/hashira_ava-2.png'
        },
        {
            id : 7,
            name: '伊黒 小芭内',
            name_romanji: 'Iguro Obanai',
            gender: 'Male',
            height: '162 cm',
            weight: '53 kg',
            birthday: 'September 15th',
            occupation: 'Hashira',
            img_src: '/img/hashira-3.png',
            ava_src: '/img/hashira_ava-3.png'
        },
        {
            id : 8,
            name: '時透 無一郎',
            name_romanji: 'Tokitō Muichirō',
            gender: 'Male',
            height: '160 cm',
            weight: '56 kg',
            birthday: 'August 8th',
            occupation: 'Hashira',
            img_src: '/img/hashira-4.png',
            ava_src: '/img/hashira_ava-4.png'
        },
        {
            id : 9,
            name: '胡蝶 しのぶ',
            name_romanji: 'Kochō Shinobu',
            gender: 'Female',
            height: '151 cm',
            weight: '37 kg',
            birthday: 'February 24th',
            occupation: 'Hashira',
            img_src: '/img/hashira-5.png',
            ava_src: '/img/hashira_ava-5.png'
        },
        {
            id : 10,
            name: '竈門 禰豆子',
            name_romanji: 'Kamado Nezuko',
            gender: 'Female',
            height: '153 cm',
            weight: '45 kg',
            birthday: 'December 28th',
            occupation: 'Demon',
            img_src: '/img/demon-1.png',
            ava_src: '/img/demon_ava-1.png'
        },

        {
            id : 11,
            name: '鬼舞辻 無惨',
            name_romanji: 'Kibutsuji Muzan',
            gender: 'Male',
            height: '179 cm',
            weight: '75 kg',
            birthday: 'Unknown',
            occupation: 'Demon',
            img_src: '/img/demon-2.png',
            ava_src: '/img/demon_ava-2.png'
        },

    ]
};


const selectCharacterReducer = (character=null, action) => {
    switch (action.type){
        case 'SELECT_CHARACTER': 
            return action.payload;
        default:
            return character;
    }
};

export default combineReducers({
    characters: charactersReducer,
    selectedCharacter: selectCharacterReducer
});