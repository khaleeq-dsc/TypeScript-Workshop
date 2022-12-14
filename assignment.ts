/* 
Assignment: 
    Create Interfaces for Input and Output (we already created those in the workshop)
    Write a TypeScript that processes the input data and produces the output data (input and output are given in this file as well)

Learnig Objectives:
1- Learn How to Create Interfaces
2- Experience how interfaces speed up coding by intellisense
3- Experience how interfaces help us in reducing errors frequency
4- Experience how interfaces play vital role in joining different pieces of code
    Imagine if there are hundereds of scripts and each script know what to provide and what to expect from other, how much code quality will improve
5- If Interface reduced about 5 ifs in a single script, how many ifs it will remove from a software which comprises of hundreds of scripts
6- Once input and ouput of each script is know then reusability becomes very easy
7- Interfaces make it very easy for developer to understand project structure
8- Interfaces can also be used by developers to tell scripts requirements that is  to be developed.
*/

const input = {
    "brandInfluencersSales": [
        {
            "brandInfluencers": "good light world-***-gg-rhode",
            "total": 108
        },
        {
            "brandInfluencers": "-***-gg-inesvaan3",
            "total": 124
        },
        {
            "brandInfluencers": "Kiramoon-***-gg-rhode",
            "total": 38
        }
    ],
    "influencers": [
        {
            "id": 67,
            "name": "X Vaan",
            "email": "xavier@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-xaviervaan"
        },
        {
            "id": 42,
            "name": "Hailey Bieber",
            "email": "hailey@rhode.com",
            "commissionPercent": 5,
            "promoCode": "cfgi-chord"
        },
        {
            "id": 8,
            "name": "amsoell",
            "email": "andy@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-andysoell"
        },
        {
            "id": 8,
            "name": "amsoell",
            "email": "andy@vaangroup.com",
            "commissionPercent": 10,
            "promoCode": "gg-amsoell2"
        },
        {
            "id": 40,
            "name": "Andy Soell",
            "email": "asoell@gmail.com",
            "commissionPercent": 5,
            "promoCode": "gg-amsoell"
        },
        {
            "id": 11,
            "name": "Borna Se",
            "email": "borna@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-bornavaan"
        },
        {
            "id": 37,
            "name": "Ines M",
            "email": "ines@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-inesvaan"
        },
        {
            "id": 42,
            "name": "Hailey Bieber",
            "email": "hailey@rhode.com",
            "commissionPercent": 5,
            "promoCode": "gg-rhode"
        },
        {
            "id": 44,
            "name": "Ines Barcena",
            "email": "barcena.inesmaria@gmail.com",
            "commissionPercent": 5,
            "promoCode": "gg-inesmariabarcena"
        },
        {
            "id": 47,
            "name": "GALATEST",
            "email": "studio@pencilz.io",
            "commissionPercent": 5,
            "promoCode": "gg-galagala"
        },
        {
            "id": 48,
            "name": null,
            "email": "katie@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-katievaan"
        },
        {
            "id": 60,
            "name": "IMBarcena",
            "email": "ines+2@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-ines2vaan"
        },
        {
            "id": 62,
            "name": "Ines M test",
            "email": "ines+3@vaangroup.com",
            "commissionPercent": 5,
            "promoCode": "gg-inesvaan3"
        },
        {
            "id": 66,
            "name": "Melanie",
            "email": "melanie@galagala.team",
            "commissionPercent": 5,
            "promoCode": "gg-jolenethekees"
        }
    ]
};
const output = {
    isValid: true,
    influencersComissions: [
        {
            brandInfluencers: 'good light world-***-gg-rhode',
            brand: 'good light world',
            affiliateId: 'gg-rhode',
            commissionPercent: 5,
            totalSales: 108,
            commissionValue: 5.4,
            name: 'Hailey Bieber',
            email: 'hailey@rhode.com',
            influencerId: 42
        },
        {
            brandInfluencers: '-***-gg-inesvaan3',
            brand: '',
            affiliateId: 'gg-inesvaan3',
            commissionPercent: 5,
            totalSales: 124,
            commissionValue: 6.2,
            name: 'Ines M test',
            email: 'ines+3@vaangroup.com',
            influencerId: 62
        },
        {
            brandInfluencers: 'Kiramoon-***-gg-rhode',
            brand: 'Kiramoon',
            affiliateId: 'gg-rhode',
            commissionPercent: 5,
            totalSales: 38,
            commissionValue: 1.9,
            name: 'Hailey Bieber',
            email: 'hailey@rhode.com',
            influencerId: 42
        }
    ]
}