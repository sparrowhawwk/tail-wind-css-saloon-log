export const NAV = {
    currentPage : '/today'
};

export function navigateTo(path) {
    NAV.currentPage = path;
};