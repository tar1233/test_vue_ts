export type HeroModel = {
    id: number,
    name: string,
    desc: string,
    price: string,
    post_code: string
}

export type payloadModel = {
    id: number,
    name: string,
    desc: string,
    price: string,
}

export type PayloadModel = {
    average: string,
    median: string
}

export type PostCodeModel = {
    post_code: string,
}

export interface JQuery {
    dataTable: any;
    datepicker: any;
    datetimepicker: any;
    moment: any;
    select2: any;
    DataTable: any;
    iCheck: any;
    animateCss: any;
    actual: any;
    fullscreen: any;
    noUiSlider: any;
    // modal: any;
    modal(options?: any): any;
    tab: any;
    multiselect: any;
    spectrum: any;
}

