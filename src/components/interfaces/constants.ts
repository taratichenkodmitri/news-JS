const mediaQueryLaptopMax: MediaQueryList = window.matchMedia('(max-width: 768px)');
const mediaQueryLaptopMin: MediaQueryList = window.matchMedia('(min-width: 420px)');
const mediaQueryPhoneMin: MediaQueryList = window.matchMedia('(max-width: 419px)');

let paginationStep = 5;

if (mediaQueryLaptopMax.matches && mediaQueryLaptopMin.matches) {
    paginationStep = 4;
} else if (mediaQueryPhoneMin.matches) {
    paginationStep = 3;
}

export enum Constants {
    startPage = 0,
    step = paginationStep,
}
