export async function getClientPosts() {

 try {
     const response = await fetch('https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_oculizm_client_posts');
     return await response.json();
 } catch (error) {
     return [];
 }

}

export async function getSinglePost(post_id) {

    

    try {
        const response = await fetch(`https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_single_post&post_id=${post_id}`);
        // console.log('response' , response.json());
        return await response.json();
    } catch (error) {
        return [];
    }
   
   }