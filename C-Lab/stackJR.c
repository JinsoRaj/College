#include<stdio.h>

#define MAX 5
 
int top=-1,stack[MAX];
void push();
void pop();
void status();
void output();
 
void main()
{
	int ch;
	
	while(1)
	{
		printf("\nSelect the stack operation");
		printf("\n\n1.Push\n2.Pop\n3.status\n4.output");
		printf("\n\nEnter your choice:");
		scanf("%d",&ch);
		
		switch(ch)
		{
			case 1: push();
					break;
			case 2: pop();
					break;
			case 3: status();
					break;
			case 4: output();
					break;
			
			default: printf("\nWrong Choice!!");
		}
	}
}
 
void push()
{
	int val;
	
	if(top==MAX-1)
	{
		printf("\nStack is full!!");
	}
	else
	{
		printf("\nEnter element to push:");
		scanf("%d",&val);
		top=top+1;
		stack[top]=val;
	}
}
 
void pop()
{
	if(top==-1)
	{
		printf("\nStack is empty!!");
	}
	else
	{
		printf("\nDeleted element is %d",stack[top]);
		top=top-1;
	}
}
void status()
{
 if(top==-1)
	{
		printf("\nStack is empty!!");
	}
 else if(top==MAX-1)
	{
		printf("\nStack is full!!");
	}
 else
 		printf("\nstack is not empty!!");
}
 
void output()
{
	int i;
	
	if(top==-1)
	{
		printf("\nStack is empty!!");
	}
	else
	{
		printf("\nStack is...\n");
		for(i=top;i>=0;--i)
			printf("%d\n",stack[i]);
	}
}
