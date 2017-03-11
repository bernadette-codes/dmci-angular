(function(){
    var app = angular.module('dmci', []);

    app.controller('propLocController', function($scope){
        $scope.cityLoc = [
            {
                cityName: 'Las Piñas',
                id: 'lasPinasSection',
                photo: 'img/locations/lasPinas.jpg',
                link: 'locations.html#lasPinasSection',
                readyForOccupancy: [
                    {propName: 'Maricielo Villas',
                        link: 'properties/MaricieloVillasLasPinas.html#mainSection',
                        namePhoto: 'img/propertiesName/lasPinas-MaricieloVillas.jpg',
                        mapPhoto: 'img/propertiesMap/lasPinas-MaricieloVillas.jpg',
                        address: 'Casimiro Avenue, Las Piñas'}],
                readyForOccupancycollapse: 'collapseLasPinas',
                readyForOccupancyShow: true
            },
            {
                cityName: 'Makati',
                id: 'makatiSection',
                photo: 'img/locations/makati.jpg',
                link: 'locations.html#makatiSection',
                underConstruction: [
                    {propName: 'Brio Tower',
                        link: 'properties/BrioTowerMakati.html#mainSection',
                        namePhoto: 'img/propertiesName/makati-BrioTower.jpg',
                        mapPhoto: 'img/propertiesMap/makati-BrioTower.jpg',
                        address: 'Guadalupe Viejo, Makati City'}],
                underConstructioncollapse: 'collapseMakati',
                underConstructionShow: true
            },
            {
                cityName: 'Mandaluyong',
                id: 'mandaluyongSection',
                photo: 'img/locations/mandaluyong.jpg',
                link: 'locations.html#mandaluyongSection',
                readyForOccupancy: [
                    {propName: 'Dansalan Gardens',
                        link: 'properties/DansalanGardensCondoMandaluyong.html#mainSection',
                        namePhoto: 'img/propertiesName/mandaluyong-DansalanGardens.jpg',
                        mapPhoto: 'img/propertiesMap/mandaluyong-DansalanGardens.jpg',
                        address: 'M. Vicente St., Mandaluyong City'},
                    {propName: 'Flair Towers',
                        link: 'properties/FlairTowersMandaluyong.html#mainSection',
                        namePhoto: 'img/propertiesName/mandaluyong-FlairTowers.jpg',
                        mapPhoto: 'img/propertiesMap/mandaluyong-FlairTowers.jpg',
                        address: 'Reliance St. Corner Pines Highway Hills, Mandaluyong City'},
                    {propName: 'Tivoli Garden',
                        link: 'properties/TivoliGardenResidencesMandaluyong.html#mainSection',
                        namePhoto: 'img/propertiesName/mandaluyong-TivoliGarden.jpg',
                        mapPhoto: 'img/propertiesMap/mandaluyong-TivoliGardenResidences.jpg',
                        address: 'Coronoado Street, Brgy. Hulo, Mandaluyong City'}],
                readyForOccupancycollapse: 'collapseMandaluyong',
                readyForOccupancyShow: true
            },
            {
                cityName: 'Muntinlupa',
                id: 'muntinlupaSection',
                photo: 'img/locations/muntinlupa.jpg',
                link: 'locations.html#muntinlupaSection',
                readyForOccupancy: [
                    {propName: 'Rhapsody Residences',
                        link: 'properties/RhapsodyResidencesMuntinlupa.html#mainSection',
                        namePhoto: 'img/propertiesName/muntinlupa-Rhapsody.jpg',
                        mapPhoto: 'img/propertiesMap/muntinlupa-Rhapsody.jpg',
                        address: 'East Service Road, Barrio Cupang, Muntinlupa City'}],
                readyForOccupancycollapse: 'collapseMuntinlupa',
                readyForOccupancyShow: true
            },
            {
                cityName: 'Parañaque',
                id: 'paranaqueSection',
                photo: 'img/locations/paranaque.jpg',
                link: 'locations.html#paranaqueSection',
                underConstruction: [
                    {propName: 'Calathea Place',
                        link: 'properties/CalatheaPlaceParanaque.html#mainSection',
                        namePhoto: 'img/propertiesName/paranaque-CalatheaPlace.jpg',
                        mapPhoto: 'img/propertiesMap/paranaque-CalatheaPlace.jpg',
                        address: 'Dr. A. Santos Ave. Parañaque City'},
                    {propName: 'Oak Harbor Residences',
                        link: 'properties/OakHarborResidencesParanaque.html#mainSection',
                        namePhoto: 'img/propertiesName/paranaque-OakHarbor.jpg',
                        mapPhoto: 'img/propertiesMap/paranaque-OakHarborResidences.jpg',
                        address: 'Jackson Ave. Asiaworld City, Brgy. Don Galo, Parañaque City'},
                    {propName: 'Asteria Residences',
                        link: 'properties/AsteriaResidencesParanaque.html#mainSection',
                        namePhoto: 'img/propertiesName/paranaque-AsteriaResidences.jpg',
                        mapPhoto: 'img/propertiesMap/paranaque-AsteriaResidences.jpg',
                        address: 'San Pedro Street , San Antonio Valley 2 Brgy San Isidro, Sucat, Parañaque City'}],
                underConstructioncollapse: 'collapse2Paranaque',
                underConstructionShow: true,
                readyForOccupancy: [
                    {propName: 'Arista Place',
                        link: 'properties/AristaPlaceParanaque.html#mainSection',
                        namePhoto: 'img/propertiesName/paranaque-AristaPlace.jpg',
                        mapPhoto: 'img/propertiesMap/paranaque-AristaPlace.jpg',
                        address: 'JP Rizal St., Brgy. Sto. Niño, Parañaque City'},
                    {propName: 'Raya Garden',
                        link: 'properties/RayaGardenCondoParanaque.html#mainSection',
                        namePhoto: 'img/propertiesName/paranaque-RayaGarden.jpg',
                        mapPhoto: 'img/propertiesMap/paranaque-RayaGarden.jpg',
                        address: 'West Service Road, Merville, Parañaque City'},
                    {propName: 'Siena Park Residences',
                        link: 'properties/SienaParkResidencesParanaque.html#mainSection',
                        namePhoto: 'img/propertiesName/paranaque-SienaPark.jpg',
                        mapPhoto: 'img/propertiesMap/paranaque-SienaParkResidences.jpg',
                        address: 'West Service Road, Sun Valley, Bicutan, Parañaque City'}],
                readyForOccupancycollapse: 'collapse3Paranaque',
                readyForOccupancyShow: true
            },
            {
                cityName: 'Pasay',
                id: 'pasaySection',
                photo: 'img/locations/pasay.jpg',
                link: 'locations.html#pasaySection',
                underConstruction: [
                    {propName: 'Fairway Terraces',
                        link: 'properties/FairwayTerracesPasay.html#mainSection',
                        namePhoto: 'img/propertiesName/pasay-FairwayTerraces.jpg',
                        mapPhoto: 'img/propertiesMap/pasay-FairwayTerraces.jpg',
                        address: 'Villamor Airbase, Pasay City'}],
                underConstructioncollapse: 'collapse2Pasay',
                underConstructionShow: true,
                readyForOccupancy: [
                    {propName: 'La Verti Residences',
                        link: 'properties/LaVertiResidencesPasay.html#mainSection',
                        namePhoto: 'img/propertiesName/pasay-LaVerti.jpg',
                        mapPhoto: 'img/propertiesMap/pasay-LaVertiResidences.jpg',
                        address: 'Taft Avenue, Pasay City'}],
                readyForOccupancycollapse: 'collapse3Pasay',
                readyForOccupancyShow: true
            },
            {
                cityName: 'Pasig',
                id: 'pasigSection',
                photo: 'img/locations/pasig.jpg',
                link: 'locations.html#pasigSection',
                underConstruction: [
                    {propName: 'Brixton Place',
                        link: 'properties/BrixtonPlacePasig.html#mainSection',
                        namePhoto: 'img/propertiesName/pasig-BrixtonPlace.jpg',
                        mapPhoto: 'img/propertiesMap/pasig-BrixtonPlace.jpg',
                        address: '27 Brixton St., Kapitolyo, Pasig City'},
                    {propName: 'Levina Place',
                        link: 'properties/LevinaPlacePasig.html#mainSection',
                        namePhoto: 'img/propertiesName/pasig-LevinaPlace.jpg',
                        mapPhoto: 'img/propertiesMap/pasig-LevinaPlace.jpg',
                        address: "Jenny's Ave., Pasig City"},
                    {propName: 'Lumiere Residences',
                        link: 'properties/LumiereResidencesPasig.html#mainSection',
                        namePhoto: 'img/propertiesName/pasig-LumiereResidences.jpg',
                        mapPhoto: 'img/propertiesMap/pasig-LumiereResidences.jpg',
                        address: 'Pasig Blvd., cor. Shaw Blvd., Pasig City'},
                    {propName: 'Mirea Residences',
                        link: 'properties/MireaResidencesPasig.html#mainSection',
                        namePhoto: 'img/propertiesName/pasig-MireaResidences.jpg',
                        mapPhoto: 'img/propertiesMap/pasig-MireaResidences.jpg',
                        address: 'Amang Rodriquez Ave., Brgy Santolan, Pasig Cit'},
                    {propName: 'Sheridan Towers',
                        link: 'properties/SheridanTowersPasig.html#mainSection',
                        namePhoto: 'img/propertiesName/pasig-SheridanTowers.jpg',
                        mapPhoto: 'img/propertiesMap/pasig-SheridanTowers.jpg',
                        address: 'Sheridan St., Pasig City'}],
                underConstructioncollapse: 'collapse2Pasig',
                underConstructionShow: true,
                readyForOccupancy: [
                    {propName: 'East Raya Gardens',
                        link: 'properties/EastRayaGardensPasig.html#mainSection',
                        namePhoto: 'img/propertiesName/pasig-EastRayaGardens.jpg',
                        mapPhoto: 'img/propertiesMap/pasig-EastRayaGardens.jpg',
                        address: 'One Mercedes Avenue, Corner Luis St. Brgy. Mercedes, Pasig City'}],
                readyForOccupancycollapse: 'collapse3Pasig',
                readyForOccupancyShow: true
            },
            {
                cityName: 'Taguig',
                id: 'taguigSection',
                photo: 'img/locations/taguig.jpg',
                link: 'locations.html#taguigSection',
                underConstruction: [
                    {propName: 'Maple Place',
                        link: 'properties/MaplePlaceTaguig.html#mainSection',
                        namePhoto: 'img/propertiesName/taguig-MaplePlace.jpg',
                        mapPhoto: 'img/propertiesMap/taguig-MaplePlace.jpg',
                        address: 'Acacia Estates, Taguig City'},
                    {propName: 'Ivory Wood',
                        link: 'properties/IvoryWoodTaguig.html#mainSection',
                        namePhoto: 'img/propertiesName/taguig-Ivorywood.jpg',
                        mapPhoto: 'img/propertiesMap/taguig-IvoryWood.jpg',
                        address: 'Acacia Estates, Taguig City'},
                    {propName: 'The Birchwood',
                        link: 'properties/TheBirchwoodTaguig.html#mainSection',
                        namePhoto: 'img/propertiesName/taguig-TheBirchwood.jpg',
                        mapPhoto: 'img/propertiesMap/taguig-TheBirchwood.jpg',
                        address: 'Acacia Estates, Taguig City'}],
                underConstructioncollapse: 'collapse2Taguig',
                underConstructionShow: true,
                readyForOccupancy: [
                    {propName: 'Cedar Crest',
                        link: 'properties/CedarCrestTaguig.html#mainSection',
                        namePhoto: 'img/propertiesName/taguig-CedarCrest.jpg',
                        mapPhoto: 'img/propertiesMap/taguig-CedarCrest.jpg',
                        address: 'Acacia Estates, Taguig City'},
                    {propName: 'Cypress Tower',
                        link: 'properties/CypressTowersTaguig.html#mainSection',
                        namePhoto: 'img/propertiesName/taguig-CypressTowers.jpg',
                        mapPhoto: 'img/propertiesMap/taguig-CypressTowers.jpg',
                        address: 'C5 Corner Diego Silang St., Taguig City'},
                    {propName: 'Verawood Residences',
                        link: 'properties/VerawoodResidencesTaguig.html#mainSection',
                        namePhoto: 'img/propertiesName/taguig-Verawood.jpg',
                        mapPhoto: 'img/propertiesMap/taguig-VerawoodResidences.jpg',
                        address: 'Acacia Estates, Taguig City'}],
                readyForOccupancycollapse: 'collapse3Taguig',
                readyForOccupancyShow: true
            }
        ];
    });

    app.controller('buyersGuideController', function($scope){
        $scope.procedure = [
            {
                step: 'Reserve your desired property',
                description: 'Accomplish the Client Registration Form provided by your Property Consultant (PC). Once this has been accomplished, the PC will prepare a Computation Sheet detailing the payment scheme that will be applied for your home purchase. This process usually takes 3 working days from date of receipt. Lastly, you will be requested to sign the Reservation Agreement, and to settle your Reservation Fee.'
            },
            {
                step: 'Select your payment scheme',
                description: 'Choose the payment scheme that you will be availing for your home purchase. There are three available modes of payment: Cash, In-house Financing, and External Financing, which can be discussed to you by your accredited Agent'
            },
            {
                step: 'Prepare the necessary requirements',
                description: 'The final step is to prepare your documentary requirements.'
            },
            {
                step: 'Turnover Process',
                description: 'Upon turnover, a specialized DMCI Homes Homeowners kit will be provided. This kit includes the “Feels Real Good to Know” flyer, that will serve as your handbook to frequently asked questions and concerns about your new DMCI Homes community. Concerns such as Association Dues, Real Estate Property Tax (RPT), Special Assessments and Other Fees, and Unit Warranty were fully explained here. This informational flyer is also available at the Property Management Office and Project Sales Office.'
            }
        ];

        $scope.cashRequirement = [
            {req: 'Signed Reservation Agreement'},
            {req: 'Photocopy of either Tax Identification No. (TIN) or BIR Form 1904'},
            {req: 'Photocopy of any valid Government issued ID/s with signature'},
            {req: 'Proof of Billing Address (must be the latest billing statement)'}
        ];

        $scope.employedLocally = [
            {req: 'Certificate of Employment (COE) stating annual salary and position'},
            {req: 'Latest Income Tax Return (ITR)'},
            {req: 'Pay Slips (past 2 months)'},
            {req: 'Proof of Billing Address (must be the latest billing statement)'},
            {req: 'Bank Statements'}
        ];

        $scope.ofw = [
            {req: 'POEA Authenticated Contract (seaman)'},
            {req: 'COE Authenticated by Philippine Consulate (direct hired)'}
        ];

        $scope.selfEmployed = [
            {req: 'Business Name (DTI-Certified) or SEC Registration'},
            {req: 'Articles of Incorporation and By-laws with SEC Registration Certificates'},
            {req: 'List of Trade References (at least 3 names and contact numbers of major suppliers and/or customers)'},
            {req: 'Audited Financial Statements for the past two (2) years'},
            {req: 'Bank Statements for the past six (6) months'},
            {req: 'Proof of Billing Address (must be the latest billing statement)'}
        ];

        $scope.doctor = [
            {req: 'Clinic address/es and schedule'},
            {req: 'Bank Statements for the past six (6) months'}
        ];

        $scope.landlord = [
            {req: 'List of tenants and rental amount'},
            {req: 'Complete address/es of properties being rented'},
            {req: 'Bank Statements for the past six (6) months'}
        ];
    });

    app.controller('aboutController', function($scope){
        $scope.features = [
            {
                feature: 'QUALITY',
                description: "DMCI Homes provides one (1) year quality warranty that covers repairs, free of charge, on any workmanship defects of the unit. Fast and reliable, the company's construction of the residential buildings and turnover of units are within 6 to 12 months only."
            },
            {
                feature: 'RESORT LIVING',
                description: 'DMCI Homes communities are equipped with complete resort amenities that include:',
                more: ['A clubhouse with function rooms, a bar, KTV room, and view deck', 'Adult and kiddie swimming pools', 'Basketball and badminton courts', 'Well-landscaped open areas, parks, and playground', 'Jogging and biking paths']
            },
            {
                feature: 'WORRY-FREE LIVING',
                more: ['24-hour security service', 'Gated entrance and perimeter fence', 'Overhead water tank, deep well, and underground cistern', 'Covered bridge way connecting the residential building to the car park', 'Individual drying area at the roof deck', 'Provision for CATV and telephone lines']
            },
            {
                feature: 'THEMED DEVELOPMENT',
                description: 'DMCI Homes residential communities are created with distinct architectural design concepts that show first class development features. Choose from:',
                more: ['Asian', 'Mediterranean', 'Modern Contemporary styled communities']
            },
            {
                feature: 'MODERN IN-CITY LIVING',
                description: 'DMCI Homes residential communities are located in close proximity to major business and commercial centers of Makati, Ortigas, and the Bonifacio Global City, letting you enjoy modern living at its best. Strategically situated within the vicinity of malls, schools, hospitals, and government offices, DMCI Homes’ residential communities make living hassle-free and convenient. DMCI Homes residential communities are easily accessible by public transportation.'
            }
        ];
    });

    app.directive('dmciLogo', function(){
        return {
            template:
            '<div class="dmciLogo">' +
                '<img src="img/dmci-logo1.jpg" alt="DMCI Logo" class="img-responsive">' +
            '</div>'
        };
    });

    app.directive('dmciLogoProp', function(){
        return {
            template:
            '<div class="dmciLogo">' +
                '<img src="../img/dmci-logo1.jpg" alt="DMCI Logo" class="img-responsive">' +
            '</div>'
        };
    });

    app.directive('contactButton', function(){
        return {
            template:
                '<div data-target="#contact1" data-toggle="modal" class="call">' +
                    '<img src="img/icons/call.jpg" alt="Contact" width="70" class="img-responsive">' +
                    '<p>contact</p>' +
                '</div>'
        };
    });

    app.directive('contactButtonProp', function(){
        return {
            template:
            '<div data-target="#contact1" data-toggle="modal" class="call">' +
                '<img src="../img/icons/call.jpg" alt="Contact" width="70" class="img-responsive">' +
                '<p>contact</p>' +
            '</div>'
        };
    });

})();
