import { Influencer } from "./interfaces/Influencer";
import { InfluencerCommission } from "./interfaces/InfluencerCommission";
import { Input } from "./interfaces/Input";
import { Output } from "./interfaces/Output";
const input: Input = {
  brandInfluencersSales: [
    {
      brandInfluencers: "good light world-***-gg-rhode",
      total: 108,
    },
    {
      brandInfluencers: "-***-gg-inesvaan3",
      total: 124,
    },
    {
      brandInfluencers: "Kiramoon-***-gg-rhode",
      total: 38,
    },
  ],
  influencers: [
    {
      id: 67,
      name: "X Vaan",
      email: "xavier@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-xaviervaan",
    },
    {
      id: 42,
      name: "Hailey Bieber",
      email: "hailey@rhode.com",
      commissionPercent: 5,
      promoCode: "cfgi-chord",
    },
    {
      id: 8,
      name: "amsoell",
      email: "andy@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-andysoell",
    },
    {
      id: 8,
      name: "amsoell",
      email: "andy@vaangroup.com",
      commissionPercent: 10,
      promoCode: "gg-amsoell2",
    },
    {
      id: 40,
      name: "Andy Soell",
      email: "asoell@gmail.com",
      commissionPercent: 5,
      promoCode: "gg-amsoell",
    },
    {
      id: 11,
      name: "Borna Se",
      email: "borna@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-bornavaan",
    },
    {
      id: 37,
      name: "Ines M",
      email: "ines@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-inesvaan",
    },
    {
      id: 42,
      name: "Hailey Bieber",
      email: "hailey@rhode.com",
      commissionPercent: 5,
      promoCode: "gg-rhode",
    },
    {
      id: 44,
      name: "Ines Barcena",
      email: "barcena.inesmaria@gmail.com",
      commissionPercent: 5,
      promoCode: "gg-inesmariabarcena",
    },
    {
      id: 47,
      name: "GALATEST",
      email: "studio@pencilz.io",
      commissionPercent: 5,
      promoCode: "gg-galagala",
    },
    {
      id: 48,
      name: null,
      email: "katie@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-katievaan",
    },
    {
      id: 60,
      name: "IMBarcena",
      email: "ines+2@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-ines2vaan",
    },
    {
      id: 62,
      name: "Ines M test",
      email: "ines+3@vaangroup.com",
      commissionPercent: 5,
      promoCode: "gg-inesvaan3",
    },
    {
      id: 66,
      name: "Melanie",
      email: "melanie@galagala.team",
      commissionPercent: 5,
      promoCode: "gg-jolenethekees",
    },
  ],
};

let output: Output = {
  isValid: false,
  influencersComissions: [],
};

input.brandInfluencersSales.forEach(brandObj=>{
  const brandInfArr:string[] = brandObj.brandInfluencers.split('-***-')
  const brand:string = brandInfArr[0]
  const affiliateId: string = brandInfArr[1]
  const influencerObj: Influencer | undefined = input.influencers.find(inf => inf.promoCode === affiliateId)
  if(influencerObj){
    let commissionValue :number = influencerObj.commissionPercent * brandObj.total * 0.01
    commissionValue = Math.round(commissionValue * 100) /100
    const finalObj: InfluencerCommission = {
      brandInfluencers: brandObj.brandInfluencers,
      brand,
      affiliateId,
      commissionPercent: influencerObj.commissionPercent,
      totalSales: brandObj.total,
      commissionValue,
      name:influencerObj.name ? influencerObj.name : '',
      email:influencerObj.email,
      influencerId: influencerObj.id
    }
    output.influencersComissions.push(finalObj)
  }

})


console.log(output)
