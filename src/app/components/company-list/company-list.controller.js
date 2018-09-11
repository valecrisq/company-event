export default class CompanyList {
    constructor(CompanyService) {
        this.CompanyService = CompanyService
    }

    $onInit() {
        this.CompanyService.getChildCompanies().then(result => {
            this.companies = result.data._embedded.companies;

            this.companies.forEach(company => {
                this.CompanyService.getChildAddress(company).then(result => {
                    company.address = result.data._embedded.addresses[0].address1;
                })
            })
        })
    }
}
