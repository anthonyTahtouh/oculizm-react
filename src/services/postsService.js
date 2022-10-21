export async function getClientPosts() {

 try {
     const response = await fetch('https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_oculizm_client_posts');
     return await response.json();
 } catch (error) {
     return [];
 }

}