#include<stdio.h>

void main(int n,char **a){
	char ch;
	int i;
	FILE *f,*f2;
	if(n<3){
		printf("not enough parameters\n");
	}else{
		f2=fopen(a[2],"wb");
		f=fopen(a[1],"rb");
		fseek(f, 0L, SEEK_END);
		int res = ftell(f);
		fseek(f,0,0);
		for(i=0;i<res;i++){
			fread(&ch,1,1,f);
			fwrite(&ch,1,1,f2);
		}
		printf("file copied\n");
		fclose(f);
		fclose(f2);
	}
}
