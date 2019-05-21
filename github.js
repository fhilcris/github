class Github{
constructor(){
    this.client_id = '0add675feeb63ecb0d29';
    this.client_secret = '90418aaae8034ef156c6686bec3f6022a74b4be2';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
    }   

    async getUser(user){
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

            const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}$client_secret=${this.client_secret}`);

            const profile = await profileResponse.json();
            const repos = await repoResponse.json();

            return{
                profile,
                repos
            };
    }

   
}