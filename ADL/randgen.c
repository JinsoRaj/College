#include <stdlib.h>
#include <stdio.h>

#define MAXELE 100000
void main()
{
	int i,j,t;
	FILE *fpr;
	fpr=fopen("random.txt","w");
	for(i=0;i<MAXELE;i++)
 		fprintf(fpr,"%d\n",rand());
 	fclose(fpr);
}
