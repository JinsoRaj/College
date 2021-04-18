#include<stdio.h>
#include<string.h>

void getstr(char *s){
	while((*s=getchar())!='\n'){
		s++;
	}
	*s='\0';
}


void main(){
	char s[50],list[10][10],word[10];
	int i,w,c,l,loc=-1,st=1;
	printf("Enter a string:\n");
	getstr(s);
	l=strlen(s);
	for(i=0,w=0,c=0;i<l;i++){
		if(s[i]==' '){
			list[w][c]='\0';
			w++;
			c=0;
		}else{
			list[w][c]=s[i];
			c++;
		}
	}
	list[w][c]='\0';
	while(st){
		printf("Enter the word to replace: ");
		scanf("%s",word);
		for(i=0;i<=w;i++){
			if(!strcmp(list[i],word)){
				loc=i;
				break;
			}
		}
		if(loc==-1){
			printf("Word not found.\n");
			st=1;
		}else{
			st=0;
			printf("Enter the new word: ");
			scanf("%s",list[loc]);
			s[0]='\0';
			for(i=0;i<=w;i++){
				strcat(s,list[i]);
				strcat(s," ");
			}
		}
	}
	printf("%s\n",s);
}
