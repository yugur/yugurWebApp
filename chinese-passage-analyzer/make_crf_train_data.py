# coding: utf-8

'''
        make_crf_train_data.py
            得到CRF++要求的格式的训练文件
用法：命令行--python make_crf_train_data.py input_file output_file
    4 tags for character tagging: B(Begin), E(End), M(Middle), S(Single)
'''
import codecs
import sys

def character_tagging(input_file, output_file):
    '''
        将输入文件内容进行标注输出到 output_file
    '''
    input_data = codecs.open(input_file, 'r', 'utf-8')
    output_data = codecs.open(output_file, 'w', 'utf-8')
    for line in input_data.readlines():
        word_list = line.strip().split()
        for word in word_list:
            if len(word) == 1:
                output_data.write(word + " S\n")
            else:
                output_data.write(word[0] + " B\n")
                for w in word[1:len(word)-1]:
                    output_data.write(w + " M\n")
                output_data.write(word[len(word)-1] + " E\n")
        output_data.write("\n")
    input_data.close()
    output_data.close()

if __name__ == '__main__':
    if len(sys.argv) == 1:
        input_file = 'pku_training.utf8'
        output_file = 'pku_training_out.utf8'
    elif len(sys.argv) != 3:
        print(len(sys.argv))
        print("pls use: python make_crf_train_data.py input output")
        sys.exit()
    else:
        input_file = sys.argv[1]
        output_file = sys.argv[2]
    character_tagging(input_file, output_file)
