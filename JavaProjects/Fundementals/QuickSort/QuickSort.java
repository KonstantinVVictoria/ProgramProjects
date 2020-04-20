public class QuickSort
{
    public static void main(String[] args)
    {
        int array[] = {7, 1, 3};
        int arrayLength = array.length;
        partition(array, arrayLength);
        for (int number:array)
        {
            System.out.print(number + ", ");
        }
    }
    public static void partition(int array[], int length)
    {
        int pivot = length/2, pivotValue = array[pivot], endOfLesser = 0;
        int lesserI = 0, greaterI = pivot + 1;
        System.out.println(pivot);

        for (int i = 0; i < length; i++)
        {
            if (i != pivot)
            {
                if (array[i] < pivotValue)
                {
                   lesserI++;
                }
                else
                {
                    greaterI++;
                }
            }
        }
        int[] lesser = new int[lesserI];
        int[] greater = new int[greaterI];
        lesserI = 0;
        greaterI = 0;
        for (int i = 0; i < length; i++)
        {
            if (i != pivot)
            {
                if (array[i] < pivotValue)
                {
                    lesser[lesserI] = array[i];
                    lesserI++;
                }
                else
                {
                    greater[greaterI] = array[i];
                    greaterI++;
                }
            }
        }

        if (endOfLesser > 2)
        {
        for (int j = 0;j < lesserI; j++)
        {
            array[j] = lesser[j];
            endOfLesser = j;
        }

        int empty  = 0;
        if (endOfLesser == 0)
        {
            array[0] = pivotValue;
        }
        else
        {
            array[endOfLesser + 1] = pivotValue;
            empty = 1;
        }
        for (int k = 0; k < greaterI; k++)
        {
            array[endOfLesser + 2 * empty + k] = greater[k];
        }
    }
}