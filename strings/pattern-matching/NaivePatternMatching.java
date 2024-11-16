class NaivePatternMatching
{

    public static void search(String pattern, String text){
        int lenOfPattern = pattern.length();
        int lenOfString = text.length();

        for(int i = 0; i <= lenOfString - lenOfPattern; i++){
            int j = 0;
            while(j < lenOfPattern && pattern.charAt(j) == text.charAt(i + j)){
                j++;
            }

            if(j == lenOfPattern) {
                System.out.println(i);
            }
        }
    }
    public static void main(String []args){
        // Example 1
        String searchString = "AABAACAADAABAABA";
        String pattern = "AABA";
        System.out.println("\nExample 1:");
        search(pattern, searchString);

        // Example 2
        String txt2 = "agd";
        String pat2 = "g";
        System.out.println("\nExample 2:");
        search(pat2, txt2);
    }
}