#include<stdio.h>
int partition(int a[],int l,int h)
{
	int i=l-1,j=l,pivot=a[h],temp;
	for(j=l;j<h;j++)
	{
		if(a[j]<=pivot)
		{
			i++;
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
	}
	temp=a[i+1];
	a[i+1]=a[h];
	a[h]=temp;
	return i+1;
}
void quick(int a[],int l,int h)
{
	if(l<h)
	{
		int p=partition(a,l,h);
		quick(a,l,p-1);
		quick(a,p+1,h);
	}
}
void main()
{
	int a[25],i,j,l,n,mid,h;
	l=0;
	printf("enter the size of array:");
	scanf("%d",&n);
	h=n-1;
	printf("enter the array elements:");
	for(i=0;i<n;i++)
		scanf("%d",&a[i]);
	quick(a,l,h);
	printf("sorted array:");
	for(i=0;i<n;i++)
		printf("%d",a[i]);
}
		
