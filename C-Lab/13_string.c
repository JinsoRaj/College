#include<stdio.h>
#include<string.h>

void con(char s1[40],char s2[20]){
	printf("Original string:\n%s\t%s\n",s1,s2);
	strcat(s1,s2);
	printf("The concatenated string is : %s\n",s1);
}

void comp(char s1[20],char s2[20]){
	printf("Original string:\n%s\t%s\n",s1,s2);
	int y=strcmp(s1,s2);
	if(y<0){
		printf("%s<%s\n",s1,s2);
	}else if(y>0){
		printf("%s>%s\n",s1,s2);
	}else{
		printf("both are equal\n");
	}
}

char strrev(char s[20],char *s1){
	int i,l=strlen(s);
	for(i=0;i<l;i++){
		*s1=s[l-i-1];
		s1++;
	}
}

void copy(char s1[20],char s2[20]){
	printf("Original string:\n%s\t%s\n",s1,s2);
	strcpy(s1,s2);
	printf("%s\t%s\n",s1,s2);
}

void rev(char s1[20],char s2[20]){
	int i,l;
	char s3[20],s4[20];
	l=strlen(s1);
	for(i=0;i<l;i++){
		s3[i]=s1[l-i-1];
	}
	s3[i]='\0';
	l=strlen(s2);
	for(i=0;i<l;i++){
		s4[i]=s2[l-i-1];
	}
	s4[i]='\0';
	printf("%s\t%s\n",s3,s4);
}

void pal(char s1[20],char s2[20]){
	char s3[20],s4[20];
	int i,l=strlen(s1);
	for(i=0;i<l;i++){
		s3[i]=s1[l-i-1];
	}
	s3[i]='\0';
	l=strlen(s2);
	for(i=0;i<l;i++){
		s4[i]=s2[l-i-1];
	}
	s4[i]='\0';
	int st1=strcmp(s1,s3);
	int st2=strcmp(s2,s4);
	if(st1==0){
		printf("%s is palindrome\n",s1);
	}else{
		printf("%s is not palindrome\n",s1);
	}
	if(st2==0){
		printf("%s is palindrome\n",s2);
	}else{
		printf("%s is not palindrome\n",s2);
	}
}

void main(){
	int opt;
	char s1[20],s2[20];
	printf("Enter the two strings:\n");
	scanf("%s%s",s1,s2);
	printf("1. Concatnation\n2. Comparison\n3. Copy\n4. Length\n5. Reverse\n6. Palindrome\n0. Exit");
	do{
		printf("\n:");
		scanf("%d",&opt);
		switch(opt){
			case 0:;
			break;
			case 1:con(s1,s2);
			break;
			case 2:comp(s1,s2);
			break;
			case 3:copy(s1,s2);
			break;
			case 4:printf("first string=%ld\tsecond string=%ld\n",strlen(s1),strlen(s2));
			break;
			case 5:rev(s1,s2);
			break;
			case 6:pal(s1,s2);
			break;
			default:printf("Invalid\n");
		}
	}while(opt!=0);
}
