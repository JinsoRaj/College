#include<stdio.h>
#include<string.h>

void getstr(char *s){
	while((*s=getchar())!='\n'){
		s++;
	}
	*s='\0';
}

void main(){
	char s[30];
	int n=1,i,l;
	printf("Enter a string:\n");
	getstr(s);
	l=strlen(s);
	for(i=0;i<l;i++){
		if(s[i]==' '){
			n++;
		}
	}
	printf("%d\n",n);
}
