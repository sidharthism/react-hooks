// Quote categories
export const QUOTE_API_CONFIG = {
    categories: {
        INSPIRE: "inspire",
        MANAGEMENT: "management",
        ART: "art",
    },
    getCategories() {
        return Object.values(this.categories)
    },
    getDefaultCategory() {
        let categories = this.getCategories();
        if (categories.length > 0) return categories[0];
        return ""
    }
}