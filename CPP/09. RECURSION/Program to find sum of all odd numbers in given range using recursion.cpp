#include <iostream>

using namespace std;

int sum_all(int f, int l){

    if(f > l){
        return 0;
    }else if(f % 2 == 1){
        return f + sum_all(f + 1, l);
    }else{
        return sum_all(f + 1, l);
    }
}

int main()
{
    int fnum, lnum;
    int sum;

    cout << "Enter fast number >>> ";
    cin >> fnum;

    cout << "Enter last number >>> ";
    cin >> lnum;

    cout << endl;

    sum = sum_all(fnum, lnum);

    cout << "Sum is: " << sum << endl;

    return 0;
}



