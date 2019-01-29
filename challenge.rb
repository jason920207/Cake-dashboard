# @Author: xiaojiezhang
# @Date:   2019-01-14T09:01:25-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-14T09:40:57-05:00



# frozen_string_literal: true

# Add your function parameters between the parentheses.
def any? (list,&block)
  list.any?(&block)
end

# Add your function parameters between the parentheses.
def none?(list, &block)
  ! list.any?(&block)
end

# Bonuses

# Add your function parameters between the parentheses.
def one?(list, &block)
  list.one?(&block)
end

# Add your function parameters between the parentheses.
def all?(list, &block)
  array.all?(&block)
end
