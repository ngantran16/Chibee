<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('stories')->insert([
        //     'id_video'=>1, 
        //     'id_type'=>1, 
        //     'id_author'=>1, 
        //     'story_name'=>'Sự tích con cú mèo', 
        //     'description'=>'Sự tích chim cú mèo – Truyện cổ tích Việt Nam ý nghĩa lý giải tại sao chim cú mèo chỉ đi kiếm ăn vào ban đêm và phê phán thói xấu tham lam, ích kỷ', 
        //     'content'=>" 
        //     Ngày xửa ngày xưa, ở trong rừng, muôn loài sống với nhau rất hòa thuận. Nhưng vào một buổi chiều nọ, Nai tha thẩn đi kiếm ăn. Nó tới bãi hoang nọ, Nai đợi nhặt quả vả. Nhưng không có gió to, vả không rụng. Nai nhìn quả vả chín đỏ trên cành mà thèm. Nai cất bước chán ngán trở về. Chợt có tiếng nói:
        //     – Chớ vội chú Nai! Nai ngơ ngác nhìn quanh chẳng thấy ai, lúc nhìn lên hốc cây trên cành cao thì thấy Cú. Nai ngập ngừng: – Bác gọi tôi ư? – Phải, chú có muốn ăn quả vả không? – Có chứ.
        //     Cú ưỡn bụng ra, mắt lim dim ngái ngủ:
        //     – Chà, tôi ăn nó quá nhiều nên không muốn cất bước nữa. Giá mà chú đến sớm, tôi đã hái cho vài quả.
        //     Kỳ thực Cú chẳng muốn cho Nai đến ăn tranh phần. Nó muốn tất cả quả vả trên cây và cả quả dưới đất nên tìm cách đuổi khéo anh chàng Nai. Làm ra vẻ thân mật, Cú bảo:
        //     Ý nghĩa sự tích chim cú mèo
        //     Sự tích chim cú mèo đã giải thích lý do tại sao chim cú mèo chỉ đi ăn đêm. Qua truyện cổ tích các em thấy, chim cú mèo vì tham lam, ích kỷ nên đã phải nhận hình phạt thích đáng. Vì xấu hổ, nên từ đó trở đi cú mèo chỉ dám đi kiếm ăn vào ban đêm.
            
        //       ", 
        //     'status'=>0, 
        //     'id_audio'=>1   
        // ]);
        // DB::table('stories')->insert(
        
        // [
        //     'id_video'=>1, 
        //     'id_type'=>1, 
        //     'id_author'=>1, 
        //     'story_name'=>'Hòn đá thần', 
        //     'description'=>'Có một hòn đá có phép màu rất kỳ lạ các bạn hãy cùng lắng nghe câu truyện cổ tích ở dưới đây nhé', 
        //     'content'=>" 
        //     Ngày xưa, có hai vợ chồng nhà kia nghèo rớt mùng tơi mà phải nuôi một đám con 5 đứa đang tuổi ăn tuổi chơi.
        //     Hai ông bà làm lụng quanh năm suốt tháng mà vẫn không kiếm đủ gạo nuôi con.
        //     Mấy đứa nhỏ nheo nhóc phải ăn bữa cơm bữa cháo độn với khoai, sắn.
        //     Năm đó, hạn hán kéo dài, nạn đói hoành hành khắp nơi, 5 đứa con của hai ông bà đói quá không chịu nổi cứ khóc i ỉ suốt ngày...
        //     Các bạn hãy cùng lắng nghe câu truyện cổ tích ở dưới đây nhé!
        //       ", 
        //     'status'=>1,'created_at'=>"2021-03-26 08:15:04",'created_at'=>"2021-03-26 08:15:04" 
        //     'id_audio'=>1   
        // ]);
        DB::table('stories')->insert([   
                'id_audio'=>1,  
                'id_video'=>1, 
                'id_type'=>1, 
                'id_author'=>1,
                'image'=>"https://docs.google.com/uc?export=download&id=1ak5eXy7vR4plVtE7bkOglCsuzbVOmhwU",
                'story_name'=>'Sự tích con cú mèo', 
                'description'=>'Sự tích chim cú mèo – Truyện cổ tích Việt Nam ý nghĩa lý giải tại sao chim cú mèo chỉ đi kiếm ăn vào ban đêm và phê phán thói xấu tham lam, ích kỷ', 
                'content'=>" 
                Ngày xửa ngày xưa, ở trong rừng, muôn loài sống với nhau rất hòa thuận. Nhưng vào một buổi chiều nọ, Nai tha thẩn đi kiếm ăn. Nó tới bãi hoang nọ, Nai đợi nhặt quả vả. Nhưng không có gió to, vả không rụng. Nai nhìn quả vả chín đỏ trên cành mthèm. Nai cất bước chán ngán trở về. Chợt có tiếng nói:
                – Chớ vội chú Nai! Nai ngơ ngác nhìn quanh chẳng thấy ai, lúc nhìn lên hốc cây trên cành cao thì thấy Cú. Nai ngập ngừng: – Bác gọi tôi ư? – Phải, chú có muốn ăn quả vả không? – Có chứ.
                Cú ưỡn bụng ra, mắt lim dim ngái ngủ:
                – Chà, tôi ăn nó quá nhiều nên không muốn cất bước nữa. Giá mà chú đến sớm, tôi đã hái cho vài quả.
                Kỳ thực Cú chẳng muốn cho Nai đến ăn tranh phần. Nó muốn tất cả quả vả trên cây và cả quả dưới đất nên tìm cách đuổi khéo anh chàng Nai. Làm ra vẻ thân mật, Cú bảo:
                Ý nghĩa sự tích chim cú mèo
                Sự tích chim cú mèo đã giải thích lý do tại sao chim cú mèo chỉ đi ăn đêm. Qua truyện cổ tích các em thấy, chim cú mèo vì tham lam, ích kỷ nên đã phải nhận hình phạt thích đáng. Vì xấu hổ, nên từ đó trở đi cú mèo chỉ dám đi kiếm ăn vào ban đêm."
                , 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',  
        ]);
        DB::table('stories')->insert([   
                'id_audio'=>2,  
                'id_video'=>2, 
                'id_type'=>1, 
                'id_author'=>1,
                'story_name'=>'Hòn đá thần', 
                'image'=>"https://docs.google.com/uc?export=download&id=1PKvYJUrsPvCsiIRCJBW_Xmk7qHnTg-Gr",
                'description'=>'Có một hòn đá có phép màu rất kỳ lạ các bạn hãy cùng lắng nghe câu truyện cổ tích ở dưới đây nhé', 
                'content'=>"Ngày xưa, có hai vợ chồng nhà kia nghèo rớt mùng tơi mà phải nuôi một đám con 5 đứa đang tuổi ăn tuổi chơi.
                Hai ông bà làm lụng quanh năm suốt tháng mà vẫn không kiếm đủ gạo nuôi con.
                Mấy đứa nhỏ nheo nhóc phải ăn bữa cơm bữa cháo độn với khoai, sắn.
                Năm đó, hạn hán kéo dài, nạn đói hoành hành khắp nơi, 5 đứa con của hai ông bà đói quá không chịu nổi cứ khóc i ỉ suốt ngày...
                Các bạn hãy cùng lắng nghe câu truyện cổ tích ở dưới đây nhé!"
                , 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
        ]);
        DB::table('stories')->insert([   
                'id_audio'=>3,  
                'id_video'=>3, 
                'id_type'=>1, 
                'id_author'=>1,
                'story_name'=>'Sư tử và kiến càng', 
                'image'=>"https://docs.google.com/uc?export=download&id=1jRp9UIyZnDA0eyi4tmP72V7bBODUHG1x",
                'description'=>'Gấu, lợn rừng, trâu rừng, bò tót đều chịu. Cuối cùng, chúng tản ra đi kiếm mồi, mặc sư tử nằm rên một mình.', 
                'content'=>"Trong rừng, sư tử có nhiều oai quyền, muôn loài đều phải sợ. Nhưng nó rất cô độc, chỉ lủi thủi một mình, không ai thân thiết để khi buồn có nhau. Thế là nó đi tìm bạn. Nhưng nó chỉ kết bạn với những loài có ngà nhọn, vuốt sắc, nanh dài, sức khỏe như voi, cọp, gấu, lợn rừng, ít ra cũng trâu rừng, bò tót. Nó nghĩ rằng kết bạn với những loài vật ấy thì nó không bao giờ thiệt. Khi chúng kiếm được mồi ngon, nhất định chúng phải biếu xén mình, lại nhỡ khi mình lâm nạn, chúng cũng có thể giúp sức với mình mà chiến thắng kẻ thù.
                Một hôm, có con kiến càng đến rủ sư tử cùng kết bạn. Sư tử liền gạt đi mà nói:
                ", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
        ]);
        DB::table('stories')->insert([   
                'id_audio'=>4,  
                'id_video'=>4, 
                'id_type'=>1, 
                'id_author'=>1,
                'story_name'=>'CHUM VÀNG, CHUM RẮN', 
                'image'=>"https://docs.google.com/uc?export=download&id=1j57lzCWtAP8fdsEjqJ4NUIPxQY2RZWye",
                'description'=>'Ngày xưa có hai vợ chồng quê nghèo đói nhưng ăn ở hiền lành và tử tế với mọi người. Một hôm, trong lúc cầy cuốc ở ngoài đồng, người chồng gặp được hũ vàng.', 
                'content'=>" Ngày xưa có hai vợ chồng quê nghèo đói nhưng ăn ở hiền lành và tử tế với mọi người. Một hôm, trong lúc cầy cuốc ở ngoài đồng, người chồng gặp được hũ vàng. Anh lẳng lặng vùi hũ vàng lại rồi về khoe với vợ:
                – Mình ơi! Hôm nay tôi đào được hũ vàng ngoài đồng.
                – Vàng đâu?
                – Tôi còn để ngoài đồng, chưa đem về.
                Người vợ dẫy nẩy người:
                – Đừng có khùng! Bắt được vàng sao không mang về. Để như thế, lỡ ai trông thấy lấy mất thì sao.
                 Người chồng bình tĩnh:
                – Mình đừng lo! Vàng đó là của trời. Trời đã cho thì không mang về, nó cũng theo mình về. Trời đã không cho mà vào tay kẻ khác thì tiếc rẻ làm chi.
                
                ", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
        ]);

        DB::table('stories')->insert([   
                'id_audio'=>5,  
                'id_video'=>5, 
                'id_type'=>1, 
                'id_author'=>1,
                'story_name'=>'Sự tích Hồ Gươm', 
                'image'=>"https://docs.google.com/uc?export=download&id=1SlqeMb2Eumj5YFpF4PioiNKWeYflm-mU",
                'description'=>'Vào thời ấy, giặc Minh đặt ách đô hộ ở nước Nam. Chúng coi dân ta như cỏ rác, thi hành nhiều điều bạo ngược làm cho thiên hạ căm giận đến tận xương tủy', 
                'content'=>"Vào thời ấy, giặc Minh đặt ách đô hộ ở nước Nam. Chúng coi dân ta như cỏ rác, thi hành nhiều điều bạo ngược làm cho thiên hạ căm giận đến tận xương tủy. Bấy giờ, ở vùng Lam-sơn nghĩa quân đã nổi dậy chống lại chúng, nhưng buổi đầu thế lực còn non yếu nên nhiều lần bị giặc đánh cho tan tác, Thấy vậy, đức Long quân quyết định cho họ mượn thanh gươm thần để họ giết giặc.
                Hồi ấy ở Thanh-hóa có một người làm nghề đánh cá tên là Lê Thận. Một đêm nọ. Thận thả lưới ở mộtbến vắng như thường. Tự nhiên trong một lần kéo lưới, chàng thấy nằng nặng, trongbụng mừng thầm chắc là có cá to. Nhưng khi thò tay bắt cá. Thận mới biết đó là một thanh sắt. Chàng vứt luôn xuống nước rồi lại thả câu ở một chỗ khác.", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>6,  
                'id_video'=>6, 
                'id_type'=>2, 
                'id_author'=>2,
                'story_name'=>'Rùa và Thỏ', 
                'image'=>"https://docs.google.com/uc?export=download&id=1tFFc9HIKZ1AS8Sj9kW_dNJVhPEDL2xes",
                'description'=>'Ngày xửa ngày xưa, có một con Rùa và một con Thỏ cãi nhau xem ai nhanh hơn. Chúng quyết định giải quyết việc tranh luận bằng một cuộc thi chạy đua. Chúng đồng ý lộ trình và bắt đầu cuộc đua.', 
                'content'=>"Ngày xửa ngày xưa, có một con Rùa và một con Thỏ cãi nhau xem ai nhanh hơn. Chúng quyết định giải quyết việc tranh luận bằng một cuộc thi chạy đua. Chúng đồng ý lộ trình và bắt đầu cuộc đua.
                Thỏ xuất phát nhanh như tên bắn và chạy thục mạng rất nhanh, khi thấy rằng mình đã khá xa Rùa, Thỏ nghĩ nên nghỉ cho đỡ mệt dưới một bóng cây xum xê lá bên vệ đường và nghỉ thư giãn trước khi tiếp tục cuộc đua.
                Vì quá tự tin vào khả năng của mình, Thỏ ngồi dưới bóng cây và nhanh chóng ngủ thiếp đi trên đường đua. Rùa từ từ vượt qua Thỏ và sớm kết thúc đường đua.
                Khi Thỏ thức dậy thì rùa đã đến đích và trở thành người chiến thắng. Thỏ giật mình tỉnh giấc và nhận ra rằng nó đã bị thua.
                
                ", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>7,  
                'id_video'=>7, 
                'id_type'=>2, 
                'id_author'=>2,
                'story_name'=>'Trí khôn của ta', 
                'image'=>"https://docs.google.com/uc?export=download&id=16psWPXu76qAHInUm1SU0Kyd1QZP0XHs8",
                'description'=>'Một con cọp từ trong rừng đi ra, thấy một anh nông dân cùng một con trâu đang cày dưới ruộng. Trâu cặm cụi đi từng bước, lâu lâu lại bị quất một roi vào mông', 
                'content'=>"Một con cọp từ trong rừng đi ra, thấy một anh nông dân cùng một con trâu đang cày dưới ruộng. Trâu cặm cụi đi từng bước, lâu lâu lại bị quất một roi vào mông. Cọp lấy làm ngạc nhiên lắm. Ðến trưa, mở cày, Cọp liền đi lại gần Trâu hỏi:
                – Này, trông anh khỏe thế, sao anh lại để cho người đánh đập khổ sở như vậy?
                Trâu trả lời khẽ vào tai Cọp:
               – Người tuy nhỏ, nhưng người có trí khôn, anh ạ!
               Cọp không hiểu, tò mò hỏi:
               – Trí khôn là cái gì? Nó như thế nào?
               Trâu không biết giải thích ra sao, đành trả lời qua quýt:
               – Trí khôn là trí khôn, chứ còn là cái gì nữa? Muốn biết rõ thì hỏi người ấy!", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>8,  
                'id_video'=>8, 
                'id_type'=>2, 
                'id_author'=>2,
                'story_name'=>'Dê đen dê trắng', 
                'image'=>"https://docs.google.com/uc?export=download&id=1FPZZnivACgxXnCNLZaxsyuJckLYPMGq1",
                'description'=> 'Ca ngợi lòng dũng cảm. Lòng can đảm là một trong những yếu tố quyết định cho thành công trong tương lai, bởi đó là một trong những phẩm chất cao quý của con người. Thông qua câu chuyện này chúng ta cũng được hai thái cực cơ bản của con người là sợ hãi và dũng cảm.', 
                'content'=>"Dê đen và Dê trắng cùng sống trong một khu rừng. Hàng ngày, cả hai thường đến uống nước và tìm cái ăn ở trong khu rừng quen thuộc.
                Một hôm, Dê trắng đi tìm cái ăn và uống nước suối như mọi khi. Dê đang mải mê ngặm cỏ, bất chợt một con Sói ở đâu nhảy xổ ra. Sói quát hỏi:
                - Dê kia! mày đi đâu? 
                Dê trắng sợ rúm cả người, lắp bắp: 
                - Dạ, dạ, tôi đi tìm... tìm cỏ non và...và uống nước suối ạ!
                Sói lại quát hỏi: 
                - Mày có gì ở chân? 
                - Dạ, dạ, chân của tôi có móng ạ...ạ!
                - Trên đầu mày có gì? 
                - Dạ, dạ, trên đầu tôi có đôi sừng mới nhú...
                - Trái tim mày thế nào? 
                - Ôi, ôi, trái...trái tim tôi đang run sợ...sợ... 
                ", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>9,  
                'id_video'=>9, 
                'id_type'=>2, 
                'id_author'=>2,
                'story_name'=>'Gà tơ đi học', 
                'image'=>"https://docs.google.com/uc?export=download&id=1zmi2AoaGAeen0-dTTKLJ35Jjc5vGiR3_", 
                'description'=> 'Buổi sáng, Gà mẹ gọi Gà Tơ: - Con trai bé bỏng ơi, mau dậy đi học nào! Nhưng Gà Tơ cứ nhắm tịt mắt, phụng phịu', 'content'=>"Buổi sáng, Gà mẹ gọi Gà Tơ: - Con trai bé bỏng ơi, mau dậy đi học nào!Nhưng Gà Tơ cứ nhắm tịt mắt, phụng phịu: - Ứ ừ, con buồn ngủ lắm! Cho con ngủ thêm một lúc nữa!Gà Mẹ dỗ dành: - Phải dậy đi học chứ con!Gà Tơ đáp: - Con biết chữ rồi mà: O tròn như quả trứng gà phải không ạ?Nói rồi, Gà Tơ lại nhắm mắt ngủ tiếp. Ngày nào Gà Tơ cũng ngủ dậy muốn như thế, lúc tỉnh dậy thì các bạn Cún Bông, Vịt Xám, Mèo Tam Thể đã đi học cả. Gà mẹ đi kiếm mồi vắng, gà Tơ lại lang thang đi chơi, không đến lớp học", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>10,  
                'id_video'=>10, 
                'id_type'=>2, 
                'id_author'=>2,
                'story_name'=>'Qua đường', 
                'image'=>"https://docs.google.com/uc?export=download&id=1HYI1NVf9q5SqLmQn6r_z_vDAT7YnsA4P",
                'description'=> 'Vào một buổi sáng mùa xuân ấm áp, những tia nắng hồng nhảy nhót trên những cành cây đầy lộc xanh mơn mởn. Hai chị em Mai và An xin phép mẹ đi chơi loanh quanh trong phố. Mẹ đồng ý và dặn:', 
                'content'=>"Vào một buổi sáng mùa xuân ấm áp, những tia nắng hồng nhảy nhót trên những cành cây đầy lộc xanh mơn mởn. Hai chị em Mai và An xin phép mẹ đi chơi loanh quanh trong phố. Mẹ đồng ý và dặn:
                – Nhớ đừng đi chơi xa các con nhé.
                Mai và An vâng dạ rồi nhảy chân sáo ra khỏi nhà, ra đường được ngắm trời, ngắm đất và thở không khí trong lành, hai chị em cười nói ríu rít.
                – An xem kìa, trên cành cây hoa sữa có một con chim xinh đang nhảy nhót bắt sâu hay không kìa! Nó là chú chim sâu rất có ích đấy em ạ.
                – Chị Mai ơi!  Cửa hàng kia có anh Hecman khổng lồ đẹp quá, chị em mình sang xem đi! Bé An rất thích người máy Hecman nên kéo chị ào sang đường, chẳng chú ý gì cả.
                Kít, kít… tiếng một loạt xe phanh gấp nghe rợn cả người. Hai chị em nhìn lên, một đoàn xe dừng hết cả lại.
                 - Này, hai cháu kia, các cháu không nhìn thấy tín hiệu đèn đỏ đang bật hay sao mà dám sang đường, nguy hiểm quá!
                Chú cảnh sát giao thông chạy đến dắt hai chị em quay lại. Chú chỉ đèn hiệu và ôn tồn giải thích:", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>11,  
                'id_video'=>11, 
                'id_type'=>3, 
                'id_author'=>3,
                'story_name'=>'Ăn cá thối', 
                'image'=>"https://docs.google.com/uc?export=download&id=1MGArVIctjaKlb9IbbCnrdfPb6Fpn3Sq0",
                'description'=> 'Có anh thợ săn không bao giờ bắn trúng mục tiêu. Một ngày, vì muốn giúp vợ, anh gánh rau ra chợ bán và bị chủ cửa hàng cá lừa đổi hai con ươn lấy mớ rau.', 
                'content'=>"Có anh thợ săn không bao giờ bắn trúng mục tiêu. Một ngày, vì muốn giúp vợ, anh gánh rau ra chợ bán và bị chủ cửa hàng cá lừa đổi hai con ươn lấy mớ rau. Vợ chồng anh ăn cá và bị ốm 3 ngày 3 đêm. Anh cố lên rừng săn chim trĩ và vô tình ngã vào cò súng, bắn trúng một con chim trĩ. Anh bẫy thêm mấy con quạ và mang ra chợ. Chủ cửa hàng cá thấy anh treo con chim trĩ ở đầu gánh nhưng lại rao là bán quạ. Hắn định lừa anh lần nữa, nhưng lần này anh đã lừa lại hắn, khiến hắn phải đổi hai con cá tráp biển tươi ngon lấy mấy con quạ của anh.", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>12,  
                'id_video'=>12, 
                'id_type'=>3, 
                'id_author'=>3,
                'story_name'=>'Công chúa bóng ma', 
                'image'=>"https://docs.google.com/uc?export=download&id=15JnrRr5HPZYlHxaOL498HAwnPcYb3cQI",
                'description'=> 'Xưa có chàng đánh trống trẻ tuổi đi tình cờ lấy được chiếc áo của công chúa bị phù thủy yểm bùa thành cái bóng giam giữ trên ngọn núi Thủy Tinh.', 
                'content'=>" 
                Cô theo anh về nhà đòi áo và kể rõ thân phận của mình. Anh hứa giúp cô thoát khỏi tay mụ phù thủy. Được sự chỉ đường của cô, anh tìm được mụ phù thủy, mụ bắt anh thực hiện những việc oái ăm: tát cạn ao nước khổng lồ, phá rừng thành củi. Anh đã cùng công chúa bày mưu kết liễu mụ phù thủy và cùng trở về thành. Công chúa dặn anh khi trở về nhất định không được hôn lên má phải của cha mẹ, nếu không ký ức về nàng sẽ tan thành mây khói. Anh đánh trống quên mất lời dặn ấy, khi trở về là lúc anh quên đi công chúa và kết hôn với người vợ được cha mẹ sắp đặt. Lễ tân hôn trải qua 3 đêm, cả 3 đêm công chúa đều hối lộ với cô dâu một chiếc áo đẹp để được đứng trước của phòng chú rể và hát. Cô dâu tinh khôn đã trộn thuốc ngủ vào cốc rượu của chú rể khiến chàng ngủ li bì 2 đêm. Chỉ đến đêm thứ 3, chú rể lén giấu rượu của vợ đưa, lúc nghe tiếng hát của công chúa thì chàng bừng tỉnh. Chàng hối hận về những gì mình đã làm, vội vàng dắt tay nàng công chúa đến phòng cha mẹ và kể rõ ngọn nguồn. Một đám cưới nữa lại được diễn ra dưới sự chúc phúc của tất cả mọi người.", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
        DB::table('stories')->insert([   
                'id_audio'=>13,  
                'id_video'=>13, 
                'id_type'=>3, 
                'id_author'=>3,
                'story_name'=>'Cô gái trong quan tài', 
                'image'=>"https://docs.google.com/uc?export=download&id=1UbUjkrAekYhwPhBDG1_Eeg9-x1zBXl-G",
                'description'=> 'Anh chàng họ Đào nọ, nhà rất nghèo, nhưng rất ham học. Anh yêu một cô gái xinh đẹp ở trong vùng, nhưng vì bố mẹ cô gái chê chàng nghèo, không có công danh nên nói chàng rất tồi tệ.', 
                'content'=>"Chàng quyết tâm ra đi, đến kinh thành làm lùng và học tập. Sau vài năm chàng thi đỗ, được làm quan, quyết trở về quê gặp cha mẹ và cô gái để cưới cô làm vợ. Nhưng không ngờ, cô gái đã trở thành vợ người khác. Họ vô tình gặp lại nhau. Chồng cô biết chuyện, ghen tuông, đánh cô một cái, không ngờ cô lăn ra đất. Người chồng tưởng chết bèn đem chôn. Chàng trai biết chuyện, đêm đến mới đến mộ khóc lóc, bỗng thấy tiếng động phát ra từ mộ, chàng đào mộ lên, hoá ra cô gái không chết. Chàng đem cô gái đến kinh thành và họ trở thành vợ chồng. Còn người chồng cũ, trong một lần lên kinh thành, nhận ra vợ mình đã là quan bà, bèn đem kiện, nhưng cô gái đã kể rõ sự tình, quan nghe xong phán người chồng cũ có tội, còn chàng trai được cưới cô gái.", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);

        DB::table('stories')->insert([   
                'id_audio'=>14,  
                'id_video'=>14, 
                'id_type'=>3, 
                'id_author'=>3,
                'story_name'=>'Khóc đổ tường thành', 
                'image'=>"https://docs.google.com/uc?export=download&id=1uTSkWEtAjkQ2tMvZy1mXHMz7BUXa0BSN",
                'description'=> 'Phạm Thực chồng của Mạnh Khương bị bắt đi xây vạn lí trường thành. Hơn một năm không có tin tức gì, Mạnh Khương lo lắng, nàng gửi lại con trai cho mẹ chăm sóc lên đường đi tìm chồng.', 
                'content'=>" Mạnh Khương vượt bao gian khó, vất vả tìm được đến Vạn lí trường thành. Mạnh Khương bị quân lính bắt và đưa tới trước mặt Thái tử. Nàng nói với Thái tử rằng muốn tìm chồng là Phạm Thực.Đau đớn thay, người quản đốc ở đây nói cho nàng biết rằng chồng nàng đã chết. Ông ấy đưa lại miếng ngọc bội của Phạm Thực cho nàng. Mạnh Khương cầm miếng ngọc đau khổ khóc lóc. Nước mắt của nàng rơi vào làm miếng ngọc phát sáng. Mạnh Khương lớn tiếng định tội triều đình đều là những kẻ bất nhân độc ác khiến bao gia đình phải khốn khổ. Thái tử sai lính đưa nàng ra chém đầu. Đúng lúc đó, dông tố bắt đầu nổi lên. Mạnh Khương ngửa mặt lên trời nói muốn được thác cùng chồng. Nói xong nàng ngã xuống đất lịm đi. Cùng lúc đó, một tia sét đánh vào bức trường thành khiến trường thành đổ sụp. Thái tử thấy vậy liền ra lệnh cho dừng việc xây dựng và cho phép nhân công được về quê nhà. Nhân dân trong vùng cảm kích tấm lòng trinh liệt của Mạnh Khương nên đã lập đền thờ và gọi nàng là Trinh Phu nhân.", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);

        DB::table('stories')->insert([   
                'id_audio'=>15,  
                'id_video'=>15, 
                'id_type'=>3, 
                'id_author'=>3,
                'story_name'=>'Đứa con biến dị ', 
                'image'=>"https://docs.google.com/uc?export=download&id=1ozmbWCmH2FAY5QcSQdt5cSKnugvn14Lo",
                'description'=> 'Nàng tiên Phylira bị thần Titan Cronus lừa dối, sinh ra một đứa bé nửa người nửa ngựa. Quá tuyệt vọng, Phylira đã cầu xin thần linh nuôi con, còn mình thì tự tử', 
                'content'=>" Đứa bé được thần Apolo nhận nuôi, đặt tên là Chiron. Cậu bé luôn bị tất cả mọi người coi thường vì ngoại hình trống Nhân mã hạ đẳng.Một lần, cậu bé bắn một mũi tên về phía bọn trẻ nhằm cứu chúng khỏi con rắn. Lũ trẻ sợ hãi cho rằng Chiron định làm hại chúng. Thần Apollo và Artemis trách mắng Chiron, đuổi cậu bé đi.Chiron một mình lớn lên trong hang đá. Một lần, chàng cứu một nữ chiến binh bị ngất trong rừng, bị thần Artemis và Hercules bắt gặp. Hercules bắn một mũi tên độc vào đùi Chiron vì tưởng chàng định làm hại người.", 
                'status'=>1,
                'created_at' => '2021-01-1 12:00:00',
                'updated_at'=> '2021-01-1 12:02:00',
            ]);
                          
    }
}
