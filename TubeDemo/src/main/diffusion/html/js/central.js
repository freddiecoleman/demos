// COPYRIGHT (c) 2013 Push Technology Ltd.

lines['C'] = { name: 'Central' };
lines['C'].stations = {
    WRP : {name: 'West Ruislip', x: 100, y: 100, routes: ['RUG']},
    RUG : {name: 'Ruislip Gardens', x: 200, y: 100, routes: ['WRP', 'SRP']},
    SRP : {name: 'South Ruislip', x: 300, y: 100, routes: ['RUG', 'NHT']},
    NHT : {name: 'Northolt', x: 400, y: 100, routes: ['SRP', 'GFD']},
    GFD : {name: 'Greenford', x: 500, y: 100, routes: ['NHT', 'PER']},
    PER : {name: 'Perivale', x: 600, y: 100, routes: ['GFD', 'HLN']},
    HLN : {name: 'Hangar Lane', x: 700, y: 100, routes: ['PER', 'NAC']},
    NAC : {name: 'North Acton', x: 800, y: 100, routes: ['HLN', 'EAC', 'WAC']},
    EAC : {name: 'East Action', x: 900, y: 100, routes: ['NAC', 'WCT']},
    WCT : {name: 'White City', x: 1000, y: 100, routes: ['EAC', 'SBC']},
    SBC : {name: 'Shepherd\'s Bush', x: 1100, y: 100, routes: ['WCT', 'HPK']},
    HPK : {name: 'Holland Park', x: 1200, y: 100, routes: ['SBC', 'NHG']},
    NHG : {name: 'Notting Hill Gate', x: 1300, y: 100, routes: ['HPK', 'QWY']},
    QWY : {name: 'Queensway', x: 1400, y: 100, routes: ['NHG', 'LAN']},
    LAN : {name: 'Lancaster Gate', x: 1500, y: 100, routes: ['QWY', 'MAR']},
    MAR : {name: 'Marble Arch', x: 1600, y: 100, routes: ['LAN', 'BDS']},
    BDS : {name: 'Bond Street', x: 1700, y: 100, routes: ['MAR', 'OXC']},
    OXC : {name: 'Oxford Circus', x: 1800, y: 100, routes: ['BDS', 'TCR']},
    TCR : {name: 'Tottenham Court Road', x: 1900, y: 100, routes: ['OXC', 'HOL']},
    HOL : {name: 'Holborn', x: 2000, y: 100, routes: ['TCR', 'CYL']},
    CYL : {name: 'Chancery Lane', x: 2100, y: 100, routes: ['HOL', 'STP']},
    STP : {name: 'St Paul\'s', x: 2200, y: 100, routes: ['CYL', 'BNK']},
    BNK : {name: 'Bank', x: 2300, y: 100, routes: ['STP', 'LST']},
    LST : {name: 'Liverpool Street', x: 2400, y: 100, routes: ['BNK', 'BNG']},
    BNG : {name: 'Bethnal Green', x: 2500, y: 100, routes: ['LST', 'MLE']},
    MLE : {name: 'Mile End', x: 2600, y: 100, routes: ['BNG', 'SFD']},
    SFD : {name: 'Stratford', x: 2700, y: 100, routes: ['MLE', 'LEY']},
    LEY : {name: 'Leyton', x: 2800, y: 100, routes: ['SFD', 'LYS']},
    LYS : {name: 'Leytonstone', x: 2900, y: 100, routes: ['LEY', 'SNB', 'WAN']},
    SNB : {name: 'Snaresbrook', x: 3300, y: 100, routes: ['LYS', 'SWF']},
    SWF : {name: 'South Woodford', x: 3700, y: 100, routes: ['SNB', 'WFD']},
    WFD : {name: 'Woodford', x: 4100, y: 100, routes: ['SWF', 'BHL', 'ROD']},
    BHL : {name: 'Buckhurst Hill', x: 4200, y: 100, routes: ['WFD', 'LTN']},
    LTN : {name: 'Loughton', x: 4300, y: 100, routes: ['BHL', 'DEB']},
    DEB : {name: 'Debden', x: 4400, y: 100, routes: ['LTN', 'THB']},
    THB : {name: 'Theydon Bois', x: 4500, y: 100, routes: ['DEB', 'EPP']},
    EPP : {name: 'Epping', x: 4600, y: 100, routes: ['THB']},

    WAN : {name: 'Wanstead', x: 3100, y: 200, routes: ['RED', 'LYS']},
    RED : {name: 'Redbridge', x: 3200, y: 200, routes: ['WAN', 'GHL']},
    GHL : {name: 'Gants Hill', x: 3300, y: 200, routes: ['RED', 'NEP']},
    NEP : {name: 'Newbury Park', x: 3400, y: 200, routes: ['GHL', 'BDE']},
    BDE : {name: 'Barkingside', x: 3500, y: 200, routes: ['NEP', 'FLP']},
    FLP : {name: 'Fairlop', x: 3600, y: 200, routes: ['BDE', 'HAI']},
    HAI : {name: 'Hainault', x: 3700, y: 200, routes: ['FLP', 'GRH']},
    GRH : {name: 'Grange Hill', x: 3800, y: 200, routes: ['HAI', 'CHG']},
    CHG : {name: 'Chigwell', x: 3900, y: 200, routes: ['GRH', 'ROD']},
    ROD : {name: 'Roding Valley', x: 4000, y: 200, routes: ['CHG', 'WFD']},

    EBY : {name: 'Ealing Broadway', x: 600, y: 200, routes: ['EBY']},
    WAC : {name: 'West Acton', x: 700, y: 200, routes: ['EBY', 'NAC']}
};

global_attrs['line_C'] = {'stroke': '#e41f1f', 'fill': '#e41f1f'};
global_attrs['station_C'] = {'fill': '#e41f1f'};
