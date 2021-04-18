#include<stdio.h>

struct student{
	char name[30];
	int roll_no;
	char address[100];
};

void getstr(char *s){
	char c;
	getchar();
	while((c=getchar())!='\n'){
		*s=c;
		s++;
	}
	*s='\0';
}

void main(){
	struct student s[20];
	int n,i;
	printf("Enter number of students:");
	scanf("%d",&n);
	for(i=0;i<n;i++){
		printf("\nEnter details of student %d\nName: ",i+1);
		getstr(s[i].name);
		printf("Enter Roll number: ");
		scanf("%d",&s[i].roll_no);
		printf("Enter Address:\n");
		getstr(s[i].address);
	}
	for(i=0;i<n;i++){
		printf("\nName: %s\n",s[i].name);
		printf("Roll number: %d\n",s[i].roll_no);
		printf("Address: %s\n",s[i].address);
	}
}
