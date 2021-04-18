#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define NUMELE 10000

void main()
{
int i,j,t;
clock_t startt,endt;
double totalt;
FILE *fpr;
int a[NUMELE];
startt=clock();
for(i=0;i<NUMELE;i++)
  scanf("%d",&a[i]);

int pos;
for(i=0;i<NUMELE-1;i++){
   pos=i;
  for(j=i+1;j<NUMELE;j++)
  {
     if(a[pos]>a[j])
        {
        pos=j;
        }
  }
      if(pos!=i)
        {
        t=a[i];
        a[i]=a[pos];
        a[pos]=t;
        }
  }
  fpr=fopen("ascending.txt","w");
  for(i=0;i<NUMELE;i++)
     fprintf(fpr,"%d\n",a[i]);
  fclose(fpr);
  
     fpr=fopen("descending.txt","w");
     for(i=NUMELE-1;i>=0;i--) 
        fprintf(fpr,"%d\n",a[i]);
     fclose(fpr);
     endt=clock();
     totalt=(double)(endt-startt)/CLOCKS_PER_SEC;
     printf("%lf",totalt);
     
     

}     
