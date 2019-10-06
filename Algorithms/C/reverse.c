#include <stdlib.h>
#include <stdio.h>

void reverse(int *, int, int);
void swap(int *, int *);
void print_array(int *, int);

int main()
{
  int array[] = {1, 2, 3, 4, 5, 6, 7, 8};
  reverse(array, 0, 8 - 1); // last index
  print_array(array, 8);
  return 0;
}

/**
 * swap array values
 */
void swap(int *i, int *j)
{
  int temp = *i;
  *i = *j;
  *j = temp;
}

/**
 * recursive reverse function
 * takes array's reference, first and last index of array
 */
void reverse(int *array, int begin, int end)
{
  /**
   * greater or equal, because it depends on the number of elements
   * if even, must be greater than
   * if odd, must be equals
   */
  if (begin >= end)
  {
    return;
  }

  swap(&array[begin], &array[end]);
  reverse(array, ++begin, --end);
}

void print_array(int *array, int length)
{
  for (int i = 0; i < length; i++)
  {
    printf("%d ", array[i]);
  }

  printf("\n");
}