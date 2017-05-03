/**
 * Created by 98435 on 2017/3/14.
 */
$(function () {
   var component = $('.component'),
       $home_content_main = $('.home-content-main'),
       $title_1 = $('.title'),
       $f2_icon_group = $('.f2-left-icon'),
       $f3_list = $('.f3-list'),
       $f3_icon_group = $('.f3-icon'),
       $more_header = $('.title_2'),
       $more_title_icon = $('.title2-icon'),
       $comment_list = $('.comment-list'),
       $comment_item = $('.comment-list .comment-item'),
       $shear = $('.footer .shear'),
       $back = $('.footer .back'),
       win_w = $(window).width();



   /*为组件添加onLeave和onLoad事件函数*/
    function addLeave(element,animate,speed,delay) {
        element.on('onLeave',function () {
            $(this).delay(delay||0).animate(animate,speed)
        })
    }
    function addLoad(element,animate,speed,delay) {
        element.on('onLoad',function () {
            $(this).delay(delay||0).animate(animate,speed)
        })
    }
   /*===============================
   *   home部分  ---第一页
   * ===============================*/
       addLeave($home_content_main,{opacity:0,left:'100%'});
       addLoad($home_content_main,{opacity:1,left:0},800);




   /*===============================
    *   f1部分  ---第二页
    * ===============================*/
   addLeave($title_1,{opacity:0,top:'10rem'});
   addLoad($title_1,{opacity:1,top:'2rem'},1000);

    /*===============================
     *   f2部分  ---第三页
     * ===============================*/
    /*判断屏幕宽度 执行对应动画*/
    if(win_w>600){
        addLeave($f2_icon_group,{opacity:0,left:'40%',top:'40%'},500,100);
        addLoad($f2_icon_group.eq(0),{opacity:1, top: '17%', left: '10%'},500,200);
        addLoad($f2_icon_group.eq(1),{opacity:1, top: '32%', left: 0},500,300);
        addLoad($f2_icon_group.eq(2),{opacity:1, top: '47%', left: '12%'},500,400);
        addLoad($f2_icon_group.eq(3),{opacity:1, top: '62%', left: '4%'},500,500);
        addLoad($f2_icon_group.eq(4),{opacity:1, top: '13%', left: '93%'},500,600);
        addLoad($f2_icon_group.eq(5),{opacity:1, top: '26%', left: '84%'},500,700);
        addLoad($f2_icon_group.eq(6),{opacity:1, top: '35%', left: '100%'},500,800);
        addLoad($f2_icon_group.eq(7),{opacity:1, top: '48%', left: '85%'},500,900);
        addLoad($f2_icon_group.eq(8),{opacity:1, top: '62%', left: '100%'},500,1000);
    }else{
        addLeave($f2_icon_group,{opacity:0,left:'5%',top:'30%'},500,100);
        addLoad($f2_icon_group.eq(0),{opacity:1, top: '7%', left: '10%'},500,200);
        addLoad($f2_icon_group.eq(1),{opacity:1, top: '4%', left: '41%'},500,300);
        addLoad($f2_icon_group.eq(2),{opacity:1, top: '9%', left: '70%'},500,400);
        addLoad($f2_icon_group.eq(3),{opacity:1, top: '20%', left: '88%'},500,500);
        addLoad($f2_icon_group.eq(4),{opacity:1, top: '30%', left: '85%'},500,600);
        addLoad($f2_icon_group.eq(5),{opacity:1, top: '43%', left: '81%'},500,700);
        addLoad($f2_icon_group.eq(6),{opacity:1, top: '60%', left: '4%'},500,800);
        addLoad($f2_icon_group.eq(7),{opacity:1, top: '61%', left: '35%'},500,900);
        addLoad($f2_icon_group.eq(8),{opacity:1, top: '56%', left: '66%'},500,1000);
    }


    /*===============================
     *   f3部分  ---第四页
     * ===============================*/
    if(win_w>600){
        addLeave($f3_icon_group,{opacity:0,left:'45%',top:'30%'});
        addLoad($f3_icon_group.eq(0),{opacity:1,left:'35%',top:'10%'},500,200);
        addLoad($f3_icon_group.eq(1),{opacity:1,left:'20%',top:'20%'},500,400);
        addLoad($f3_icon_group.eq(2),{opacity:1,left:'9%',top:'38%'},500,600);
        addLoad($f3_icon_group.eq(3),{opacity:1,left:'5%',top:'57%'},500,800);
    }else{
        addLeave($f3_icon_group,{opacity:0,top:'30%'});
        addLoad($f3_icon_group.eq(0),{opacity:1,top:'5%'},500,200);
        addLoad($f3_icon_group.eq(1),{opacity:1,top:'25%'},500,400);
        addLoad($f3_icon_group.eq(2),{opacity:1,top:'45%'},500,600);
        addLoad($f3_icon_group.eq(3),{opacity:1,top:'65%'},500,800);
    }



    $f3_list.on('onLeave',function () {
        $f3_list.slideUp();
    });
    $f3_list.on('onLoad',function () {
        $f3_list.slideDown();
    });

    /*_______________________*/

    /*===============================
     *   more部分  ---第五页
     * ===============================*/
    addLeave($more_header,{width:0});
    addLoad($more_header,{width:'100%'},400);

    addLeave($more_title_icon,{top:'-8rem',opacity:0});
    addLoad($more_title_icon,{top:'2rem',opacity:1},800,200);

    /*===============================
     *   comment部分  ---第六页
     * ===============================*/
    var list_w = parseInt($comment_list.css('width')),
        item_w = parseInt($comment_item.css('width'));
    var offset_center = (list_w - win_w)/2,
        margin_right = parseInt($comment_item.eq(1).css('marginRight')),
        distance_w = item_w+margin_right,
        index = 0;
    /*设置列表的left使其居中显示*/
    $comment_list.css('left',-offset_center);
    /*点击左箭头*/
    $('.arrow-left').click(function () {
        if(!$comment_list.is(':animated')) {
            if(win_w>1000){
                if(index > -1){
                    $('.arrow').show();
                    $comment_list.animate({left: '+=' + distance_w});
                    index--;
                }else if(index == -1){
                    $comment_list.animate({left: '+=' + distance_w});
                    $('.arrow-left').hide();
                    index--;
                }
            }else{
                if(index > -2){
                    $('.arrow').show();
                    $comment_list.animate({left: '+=' + distance_w});
                    index--;
                }else if(index == -2){
                    $comment_list.animate({left: '+=' + distance_w});
                    $('.arrow-left').hide();
                    index--;
                }
            }

            mask_item();
        }
    });
    /*点击右箭头*/
    $('.arrow-right').click(function () {
        if(!$comment_list.is(':animated')){
            if(win_w>1000){
                if(index < 1){
                    $('.arrow').show();
                    $comment_list.animate({left:'-='+distance_w});
                    index++;
                }else if(index == 1){
                    $comment_list.animate({left:'-='+distance_w});
                    $('.arrow-right').hide();
                    index++;
                }
            }else{
                if(index < 2){
                    $('.arrow').show();
                    $comment_list.animate({left:'-='+distance_w});
                    index++;
                }else if(index == 2){
                    $comment_list.animate({left:'-='+distance_w});
                    $('.arrow-right').hide();
                    index++;
                }
            }
            mask_item();
        }
    });
    /*为两端的item添加遮罩层*/
    function mask_item() {
        for(var i=0;i<$comment_item.length;i++){
            if(Math.abs(i - (index+3))>1){
                $comment_item.eq(i).find('*').hide();
                $comment_item.eq(i).css('opacity',0.3);
            }else{
                $comment_item.eq(i).find('*').show();
                $comment_item.eq(i).css('opacity',1);
            }
        }
    }
    mask_item();

    /*===============================
     *   footer部分  ---第七页
     * ===============================*/
    addLeave($shear,{opacity:0,top:'8rem',right:'15rem'});
    addLoad($shear,{opacity:1,top:'3rem',right:'3rem'},800);

    /*点击返回第一页*/
    $back.click(function () {
        $.fn.fullpage.moveTo(1)
    });



   $('#wrap').fullpage({
       onLeave:function(index,nextIndex,direction){
           $(this).find('.component').trigger('onLeave');
       },
       afterLoad:function(anchorLink,index){
           $(this).find('.component').trigger('onLoad');
       }
   });

});
