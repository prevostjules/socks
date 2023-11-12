def calculate_pairs_socks_to_pack
  k = 3
  clean_socks = %w[blue orange orange green]
  dirty_socks = %w[red red blue yellow]

  sock_pairs_to_pack_count = 0
  clean_socks_by_color = {}

  clean_socks.each do |sock|
    if !clean_socks_by_color.has_key?(sock)
      clean_socks_by_color[sock] = 1
    else
      sock_pairs_to_pack_count += 1
      clean_socks_by_color.delete(sock)
    end
  end

  dirty_socks_by_color = {}
  socks_to_wash_count = 0

  dirty_socks.each do |sock|
    break if socks_to_wash_count === k

    if clean_socks_by_color.has_key?(sock)
      sock_pairs_to_pack_count += 1
      clean_socks_by_color.delete(sock)
      socks_to_wash_count += 1
    else
      if dirty_socks_by_color.has_key?(sock)
        dirty_socks_by_color[sock] += 1
      else
        dirty_socks_by_color[sock] = 1
      end
    end
  end

  if socks_to_wash_count < k - 1
    dirty_socks_by_color.values.each do |socks_count|
      break if socks_to_wash_count >= k - 1

      if socks_count % 2 == 0
        if socks_count > k - socks_to_wash_count
          socks_count = k - socks_to_wash_count
        end
        socks_to_wash_count += socks_count
        sock_pairs_to_pack_count += (socks_count / 2).floor
      end
    end
  end

  p sock_pairs_to_pack_count
end

calculate_pairs_socks_to_pack
