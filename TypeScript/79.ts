function exist(board: string[][], word: string): boolean {
    const h=board.length,w=board[0].length;
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    const visited=new Array(h);
    for(let i=0;i<visited.length;++i){
        visited[i]=new Array(w).fill(false);
    }
    const check=(i:number,j:number,s:string,k:number)=>{
        if(board[i][j]!=s.charAt(k)){
            return false;
        }else if(k===s.length-1){
            return true;
        }
        visited[i][j]=true;
        let result=false;
        for(const [dx,dy] of direction){
            let newi=i+dx,newj=j+dy;
            if(newi>=0&&newi<h&&newj>=0&&newj<w){
                if(!visited[newi][newj]){
                    const flag=check(newi,newj,s,k+1);
                    if(flag){
                        result=true;
                        break;
                    }
                }
            }
        }
        visited[i][j]=false;
        return result;
    };
    for(let i=0;i<h;++i){
        for(let j=0;j<w;++j){
            const flag=check(i,j,word,0);
            if(flag){
                return true;
            }
        }
    }
    return false;
};  