const express = require("express");
const cors = require('cors');
const res = require("express/lib/response");
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = 8080;

const products = [
    {
        id: 60081,
        name: 'Autómentő',
        category: 'City',
        year: 2015,
        description: 'Autómentő autóval és 2 figurával',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/60081_Prod.jpg',
        wanting: {
            wanting_id: 4211549,
            wanting_description: 'Sötét szürke 4x1-es lapos'
        }
    },
    {
        id: 31037,
        name: 'Kaland járművek',
        category: 'Creator',
        year: 2015,
        description: 'Terepjáró csörlővel',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/31037_Prod.jpg',
        wanting: {
            wanting_id: 4211133,
            wanting_description: 'Sötét szürke 3x1-es'
        }
    },
    {
        id: 60007,
        name: 'Vakmerő száguldás',
        category: 'City',
        year: 2012,
        description: 'Rendőr autó, rendőr motor, piros versenyautó 3 figurával',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/60007_prod.jpg',
        wanting:
            {
                wanting1:
                    {
                        wanting_id: 4211486,
                        wanting_description: '1 db 2x16-os világosszürke',
                    },
                wanting2:
                    {
                        wanting_id: 371001,
                        wanting_description:  '1 db 1x4-es fehér'
                    },
                wanting3:
                    {
                        wanting_id: 6018081,
                        wanting_description: '2 db 2x2-es világosszürke keréktengely'
                    }
            }
    },
    {
        id: 31003,
        name: 'Piros rotorok',
        category: 'Creator',
        year: 2013,
        description: 'Piros helikopter, vagy repülő, vagy hidroplán',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/31003_prod.jpg',
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 41524,
        name: 'Mesmo',
        category: 'Mixels',
        year: 2014,
        description: 'Madár',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/41524_prod.jpg',
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 70788,
        name: 'Kopaka – A Jég ura',
        category: 'Bionicle',
        year: 2015,
        description: '',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/70788_Prod.jpg',
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75111,
        name: 'Darth Vader™',
        category: 'Star Wars',
        year: 2015,
        description: '',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/75111_Prod.jpg',
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60041,
        name: 'Rablóüldözés',
        category: 'City',
        year: 2013,
        description: '',
        image: 'https://www.lego.com/cdn/product-assets/product.img.pri/60041_prod.jpg',
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75108,
        name: 'Cody™ klónparancsnok',
        category: 'Star Wars',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/75108_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 6910,
        name: 'Mini Sportautó',
        category: 'Creator',
        year: 2012,
        description: 'Mdár',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/6910_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 6913,
        name: 'Kék sportautó',
        category: 'Creator',
        year: 2012,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/6913_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 30355,
        name: 'Dzsungel terepjáró',
        category: 'City',
        year: 2017,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/30355_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60032,
        name: 'Sarki hójáró',
        category: 'City',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60032_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 31018,
        name: 'Országúti robogó',
        category: 'Creator',
        year: 2013,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/31018_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60067,
        name: 'Helikopteres üldözés',
        category: 'City',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60067_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 31002,
        name: 'Szuper versenygép',
        category: 'Creator',
        year: 2012,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/31002_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 31005,
        name: 'Építkezési járműszállító',
        category: 'Creator',
        year: 2012,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/31005_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75024,
        name: 'HH-87 Starhopper™',
        category: 'Star Wars',
        year: 2013,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/75024_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60186,
        name: 'Nehéz bányafúró',
        category: 'City',
        year: 2018,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60186_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60047,
        name: 'Rendőrkapitányság',
        category: 'City',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60047_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60223,
        name: 'Kombájn szállító',
        category: 'City',
        year: 2018,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60223_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 31020,
        name: 'Dupla légcsavaros repülő',
        category: 'Creator',
        year: 2013,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/31020_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60127,
        name: 'Börtönsziget kezdőkészlet',
        category: 'City',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60127_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60044,
        name: 'Mobil rendőri egység',
        category: 'City',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60044_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75083,
        name: 'AT-DP™',
        category: 'Star Wars',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/75083_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 41536,
        name: 'Gox',
        category: 'Mixels',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/41536_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 30371,
        name: 'Lovagi robogó',
        category: 'Nexo Knights',
        year: 2016,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/30371_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 40194,
        name: 'Célvonal és dobogó',
        category: 'Ferrari',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/40194_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 31027,
        name: 'Kék versenyautó',
        category: 'Creator',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/31027_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75102,
        name: 'Poe X-szárnyú vadászgépe™',
        category: 'Star Wars',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/75102_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60073,
        name: 'Szervizkocsi',
        category: 'City',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60073_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75164,
        name: 'Lázadó oldali harci csomag',
        category: 'Star Wars',
        year: 2017,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/75164_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 75030,
        name: 'Millennium Falcon™',
        category: 'Star Wars',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/75030_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 70782,
        name: 'A Jég védelmezője',
        category: 'Bionicle',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/70782_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60156,
        name: 'Dzsungeljáró homokfutó',
        category: 'City',
        year: 2017,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60156_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60072,
        name: 'Bontási munkálatok kezdő készlet',
        category: 'City',
        year: 2015,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60072_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 40195,
        name: 'Shell benzinkút',
        category: 'Ferrari',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/40195_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60006,
        name: 'Rendőrségi ATV',
        category: 'City',
        year: 2012,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60006_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 60043,
        name: 'Rabszállító',
        category: 'City',
        year: 2014,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/60043_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 30251,
        name: "Winzar's Pack Patrol",
        category: 'Chima',
        year: 2013,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/30251_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 7912,
        name: 'Helikopter',
        category: 'Promo',
        year: 2004,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/7912_prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
    {
        id: 30387,
        name: 'Bob Minyon robotkarokkal',
        category: 'Minions',
        year: 2021,
        description: '',
        image: `https://www.lego.com/cdn/product-assets/product.img.pri/30387_Prod.jpg`,
        wanting: {
            wanting_id: 0,
            wanting_description: ''
        }
    },
]

app.listen(port, () => {
    console.log(`Lego projekt backend started at ${port} port!`);
});

app.get('/port', (req, res) => {
    res.status(200).send(`Helló World!`)
});

app.get('/', (req, res) => {
    res.status(200).send(products);
});

app.get('/:id', (req, res) => {
    const index = checkId(req.params.id);
    index === -1 ? res.status(404).send(`The lego, with the given ${req.params.id} was not found!`) : res.status(200).send(products[index])
});

app.delete('/:id', (req, res) => {
    const index = checkId(req.params.id);
    console.log('ID, what you want to delete:  ', parseInt(req.params.id));
    console.log('The index of this ID:  ', index);
    products.splice(index, 1);

    res.status(200).send('The selected lego was deleted successfully!');
    //index === -1 ? res.status(404).send(`The lego, with the given ${req.params.id} was not found!`) : res.status(200).send(products[index])
});

const checkId = (id) => {
    const selectedLego = products.find(oneLego => oneLego.id === parseInt(id));
    return products.indexOf(selectedLego);

}