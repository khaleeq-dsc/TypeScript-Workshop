import {influencersComissions} from './OutputInterface'
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

/* Feedback: Output is not defined and calculated */
/* Feedback: Not required files are included in the assignment */

input.brandInfluencersSales.forEach(function(brandObj){
    // console.log('brandObj', brandObj);
    const brandInf : string[] = brandObj.brandInfluencers.split('-***-') /* Feedback: good to see the use of TS */
    // console.log('brandInf',brandInf);
    const brand:string=brandInf[0]
    // console.log('brandName',brandName);
    const affiliateId:string=brandInf[1]
    // console.log('affiliateId',affiliateId);
    const promocode =input.influencers.find(function(influencer){
        // console.log('infuencer', influencer.promoCode);
      if (influencer.promoCode === affiliateId){
        const commissionValue:number= influencer.commissionPercent * brandObj.total / 100
        // console.log('commissionValue',commissionValue);
      const outputComissions: influencersComissions = {
        brandInfluencers: brandObj.brandInfluencers,
        brand,
        affiliateId,
        commissionPercent: influencer.commissionPercent,
        totalSales: brandObj.total,
        commissionValue,
        name: influencer.name ? influencer.name : '',
        email: influencer.email,
        influencerId: influencer.id
      }
console.log('outputComissions',outputComissions);
      }
    })
})
