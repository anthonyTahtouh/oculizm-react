export async function getClientGalleries() {

 try {
     const response = await fetch('https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_galleries');
     return await response.json();
 } catch (error) {
     return [];
 }

}