#include<stdio.h>

#include <time.h>
#define MAXELE 100000

int main(){
	int ar[MAXELE],i,j,n,s,found=0,temp;
	int f=0,l = MAXELE,m;
	
	clock_t start_t, end_t;
	float total_t;
	
	n = MAXELE;
	
	for(i = 0; i < n; i++)
		scanf("%d", &ar[i]);
	
	s = ar[0];
	//s = ar[MAXELE/2];
	//s = ar[MAXELE-1];
	
	start_t = clock();
	
	m=(l+f)/2;
	for(i=0;i<n;i++){
		if(ar[m]==s){
			printf("Element found at %d\n",m);
			found=1;
			break;
		}else if(ar[m]<s){
			f=m;
			m=(f+l)/2;
		}else{
			l=m;
			m=(f+l)/2;
		}
	}
	if(!found){
		printf("Not found.\n");
	}
	
	end_t = clock();
	total_t = (float)(end_t - start_t)/CLOCKS_PER_SEC;
	
	printf("%f\n", total_t);
}
