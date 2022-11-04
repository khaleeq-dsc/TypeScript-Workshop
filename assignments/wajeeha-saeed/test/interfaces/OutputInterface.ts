 export interface influencersComissions {
    brandInfluencers: string;
    brand: string;
    affiliateId: string;
    commissionPercent: number;
    totalSales: number;
    commissionValue: number;
    name: string;
    email: string;
    influencerId: number
}

 interface outputInterface {
    isValid:boolean,
    influencersComissions:influencersComissions[]
};

const output: outputInterface = {
    isValid:true,
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