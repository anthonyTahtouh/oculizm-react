export async function getAllClients() {

    try {
        const response = await fetch('https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_all_clients');
        return await response.json();
    } catch (error) {
        return [];
    }

}

export async function getAllClientStats() {

    try {
        const response = await fetch('https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_client_stats');
        return await response.json();
    } catch (error) {
        return [];
    }

}

export async function getClientTopProducts() {

    try {
        const response = await fetch('https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_top_products');
        return await response.json();
    } catch (error) {
        return [];
    }

}