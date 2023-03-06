clear all; close all; clc;

%%

%Loading the image
Original_Image = imread('PeppersOG.jpg');

%Red Matrix
Red_Matrix   = Original_Image(:,:,1);

%Green Matrix
Green_Matrix = Original_Image(:,:,2);

%Gray image of the orignal Image
Gray_Image  = rgb2gray(Original_Image);

%%

%Get Red Objects Only

%Subtracting the Green Matrix from the Red Matrix
Subtract_RedGreen=imsubtract(Red_Matrix,Green_Matrix);

%Subtracting the Gray image from the Subtracted RedGreen Image
Subtract_RedGreen_Gray = imsubtract(Subtract_RedGreen,Gray_Image);

%Converting the Subtracted RedGray Image into a Binary Image
Only_Red_bin = im2bw(Subtract_RedGreen_Gray,0.18);


%% 

%Prepare and Apply Mask

%Getting the complement of the Red Binary image and converting it into a
%binary image
Only_Red_Mask = im2bw(imcomplement(Only_Red_bin));

%Creating a 3 channel mask
Only_Red_Mask = cat(3,Only_Red_Mask,Only_Red_Mask,Only_Red_Mask);

%Creating a back up of the Original Image
Only_Red_Image = Original_Image;

%Creating Red Only Mask
Only_Red_Image(Only_Red_Mask)=0;


%% 

%Displaying the results

%The Original Image displayed
figure,imshow(Original_Image),title('original image'),

%The Red only objects extracted displayed
figure,imshow(Only_Red_Image),title('extracted objects');