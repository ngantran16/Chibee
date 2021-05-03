<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('story_type')->insert([
            'name'=>'Truyện cổ tích',
            'description'=>'Truyện cổ tích là một thể loại văn học được tự sự dân gian sáng tác có xu thế hư cấu, bao gồm cổ tích thần kỳ, cổ tích thế sự, cổ tích phiêu lưu và cổ tích loài vật. Đây là loại truyện ngắn, chủ yếu kể về các nhân vật dân gian hư cấu, như tiên, yêu tinh, thần tiên, quỷ, người lùn, người khổng lồ, người cá, hay thần giữ của, và thường là có phép thuật, hay bùa mê.'      
        ]);
        DB::table('story_type')->insert([
            'name'=>'Truyện ngụ ngôn',
            'description'=>'Truyện ngụ ngôn là truyện kể có thể kể bằng văn xuôi hoặc văn vần, có tính chất đối nhân sử thế, dùng cách ẩn dụ hoặc nhân hóa loài vật, con vật hay kể cả con người để thuyết minh cho một chủ đề luân lý, triết lý một quan niệm nhân sinh hay một nhận xét về thực tế xã hội hay những thói hư tật xấu của con người. Có một số truyện ngụ ngôn gây cười nhưng cũng ngụ ý bóng gió, kín đáo khuyên nhủ, răn dạy con người.'      
        ]);
        // DB::table('story_type')->insert([
        //     'name'=>'Truyện cười',
        //     'description'=>'Truyện cười là thể loại văn học dân gian, là một lĩnh vực truyện kể dân gian rộng lớn, đa dạng, phức tạp bao gồm những hình thức được gọi bằng những danh từ khác nhau có tác dụng gây cười, lấy tiếng cười để khen chê và mua vui,giải trí'      
        // ]);
        DB::table('story_type')->insert([
            'name'=>'Quà Tặng cuộc sống',
            'description'=>'Quà tặng cuộc sống được xây dựng dưới hình thức phim hoạt hình nghệ thuật, có thời lượng 5 phút. Nội dung của chương trình chứa đựng những thông điệp về tình cảm con người hoặc những triết lý, bài học kinh nghiệm về cuộc sống. Mỗi phim là một câu chuyện nhỏ, súc tích, xoay quanh mọi lĩnh vực của cuộc sống thường ngày: bó hoa trên mộ mẹ, lời dạy của người thầy năm xưa, kỷ niệm về một người bạn... qua đó gửi gắm những triết lý sâu sắc về lẽ sống như: hạnh phúc là gì, sức mạnh của nụ cười'      
        ]);

        
       
    }
}
