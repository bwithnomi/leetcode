function lengthOfLongestSubstring(s: string): number {
    let substring: string[] = [];
    let left = 0;
    let longest = 0;

    for(let right = 0; right < s.length; right++){
        let index = substring.findIndex(a => a == s[right])
        if(index > -1){
            substring.splice(0, index + 1)
            left = left+index+1;
        }

        substring.push(s[right])
        longest = Math.max(longest, right - left + 1)
    }

    return longest;
};